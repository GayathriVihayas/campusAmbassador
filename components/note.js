import React from 'react';

export default function note() {
  return (
    <container className="flex flex-wrap amb-note-main-container">
      <div class="container mx-auto p-4 flex flex-col md:flex-row">
        <div class="w-full md:w-1/2 p-4">
          <h6 className="note-heading">Note</h6>
          <p className="note-para-refferels text-lg">
            Referrals above 50 will be :
            <span className="note-para-refferels-span">
              Added in a leaderboard and Cash prizes of 5K, 3K and 2K rupees
              respectively will be awarded to the top three ambassadors based on
              the number of referrals,Free access to 1 online course
            </span>
          </p>

          <p class="text-lg">
            Vouchers and goodies will be awarded based on marketing deals
          </p>
        </div>
        <div class="w-full md:w-1/2 p-4">
          <h3 className="note-heading"> How to earn referral points</h3>
          <p className="text-lg">Step 1: Register as an ambassador</p>
          <p className="text-lg">
            Step 2: Check your email for the confirmation and referral code
          </p>
          <p className="text-lg">
            Step 3: Start referring your friends to join the event
          </p>
          <p className="text-lg">
            Step 4: Ask your friends to register using your code
          </p>
        </div>
      </div>
    </container>
  );
}
