import React from 'react';

export default function note() {
  return (
    <container className="flex flex-wrap amb-note-main-container">
      <div className="note-amb">
        <h6 className="note-heading">Note</h6>
        <p>
          Referrals above 50 will be :Added in a leaderboard and Cash prizes of
          5K, 3K and 2K rupees respectively will be awarded to the top three
          ambassadors based on the number of referrals,Free access to 1 online
          course
        </p>
        <p>Vouchers and goodies will be awarded based on marketing deals</p>
      </div>
      <div className="amb-refferel-point">
        <h3 className="note-heading"> How to earn referral points</h3>
        <p>Step 1: Register as an ambassador</p>
        <p>Step 2: Check your email for the confirmation and referral code</p>
        <p>Step 3: Start referring your friends to join the event</p>
        <p>Step 4: Ask your friends to register using your code</p>
      </div>
    </container>
  );
}
