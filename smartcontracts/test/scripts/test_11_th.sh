#!/bin/bash

CAND=2
GRP=1
RM=1000
MPC=150

sed -i '' -e "s/CANDIDATES_CNT:.*/CANDIDATES_CNT: $CAND,/g"  ../../lib/config.js
sed -i '' -e "s/GROUPS_CNT:.*/GROUPS_CNT: $GRP,/g"  ../../lib/config.js
sed -i '' -e "s/RM_BATCH_SIZE:.*/RM_BATCH_SIZE: $RM,/g"  ../../lib/config.js
sed -i '' -e "s/MPC_BATCH_SIZE:.*/MPC_BATCH_SIZE: $MPC,/g"  ../../lib/config.js

for i in 1000
do    
   batch=$i

   sed -i '' -e "s/VOTERS_CNT:.*/VOTERS_CNT: $i,/g"  ../../lib/config.js
   echo -n "$i: ";

   truffle test --bail --network advanced ../VotingC.js > ../test_logs/tmp.txt
   cat ../test_logs/tmp.txt >> test_logs/test_11_log.txt

   #grep "Gas used in enrollVoters:" ../test_logs/tmp.txt
   #grep "Gas used in splitGroups:" ../test_logs/tmp.txt
   #grep "Gas used in deployBooths:" ../test_logs/tmp.txt

done