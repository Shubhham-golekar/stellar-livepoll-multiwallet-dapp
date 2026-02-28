#![no_std]

use soroban_sdk::{
    contract, contractimpl, contracttype,
    Address, Env, Symbol, Vec,
};

#[contracttype]
pub struct Poll {
    pub question: Symbol,
    pub options: Vec<Symbol>,
    pub votes: Vec<u32>,
}

#[contracttype]
pub enum DataKey {
    Poll,
    Voted(Address),
}

#[contract]
pub struct VotingContract;

#[contractimpl]
impl VotingContract {

    pub fn init(env: Env, question: Symbol, options: Vec<Symbol>) {
        let mut votes = Vec::new(&env);

        for _ in 0..options.len() {
            votes.push_back(0);
        }

        let poll = Poll {
            question,
            options,
            votes,
        };

        env.storage().instance().set(&DataKey::Poll, &poll);
    }

    pub fn vote(env: Env, voter: Address, option_index: u32) {
        voter.require_auth();

        if env.storage().instance().has(&DataKey::Voted(voter.clone())) {
            panic!("Already voted");
        }

        let mut poll: Poll =
            env.storage().instance().get(&DataKey::Poll).unwrap();

        let current = poll.votes.get(option_index).unwrap();
        poll.votes.set(option_index, current + 1);

        env.storage().instance().set(&DataKey::Poll, &poll);
        env.storage().instance().set(&DataKey::Voted(voter), &true);
    }

    pub fn get_poll(env: Env) -> Poll {
        env.storage()
            .instance()
            .get(&DataKey::Poll)
            .unwrap()
    }
}