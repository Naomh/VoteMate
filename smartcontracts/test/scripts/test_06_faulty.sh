#!/bin/bash

CAND=2
GRP=1
RM=1000

sed -i '' -e "s/CANDIDATES_CNT:.*/CANDIDATES_CNT: $CAND,/g"  ../../lib/config.js
sed -i '' -e "s/GROUPS_CNT:.*/GROUPS_CNT: $GRP,/g"  ../../lib/config.js
sed -i '' -e "s/RM_BATCH_SIZE:.*/RM_BATCH_SIZE: $RM,/g"  ../../lib/config.js

for i in 10 #{7..10}
do    
   allv=$((i + 2))

   sed -i '' -e "s/VOTERS_CNT:.*/VOTERS_CNT: $allv,/g"  ../../lib/config.js
   sed -i '' -e "s/MPC_BATCH_SIZE:.*/MPC_BATCH_SIZE: $allv,/g"  ../../lib/config.js
   sed -i '' -e "s/FAULTY_VOTERS:.*/FAULTY_VOTERS: $i,/g"  ../../lib/config.js
   echo -n "$i, $allv: ";

   truffle test --bail --network advanced ../VotingCfault.js > ../test_logs/tmp.txt
   cat ../test_logs/tmp.txt >> test_logs/test_06_log.txt

   grep "Gas used in changeStageToFaultRepair:" ../test_logs/tmp.txt
   grep "Gas used in vote repairs:" ../test_logs/tmp.txt
   grep "Average gas used per vote repair:" ../test_logs/tmp.txt

done