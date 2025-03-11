#!/bin/bash

CAND=2
GRP=1
RM=1000

sed -i '' -e "s/CANDIDATES_CNT:.*/CANDIDATES_CNT: $CAND,/g"  ../../lib/config.js
sed -i '' -e "s/GROUPS_CNT:.*/GROUPS_CNT: $GRP,/g"  ../../lib/config.js
sed -i '' -e "s/RM_BATCH_SIZE:.*/RM_BATCH_SIZE: $RM,/g"  ../../lib/config.js

for i in 152 154 156 158 160 162 164 166 168
do    

	sed -i '' -e "s/VOTERS_CNT:.*/VOTERS_CNT: $i,/g"  ../../lib/config.js
	sed -i '' -e "s/MPC_BATCH_SIZE:.*/MPC_BATCH_SIZE: $i,/g"  ../../lib/config.js
   
	echo -n "$i: ";

	truffle test --bail --network advanced ../VotingC.js > ../test_logs/tmp.txt
	cat ../test_logs/tmp.txt >> test_logs/test_10_log.txt

	#grep "Gas used in buildRightMarkers4MPC:" ../test_logs/tmp.txt
	grep "Gas used in compute MPC key:" ../test_logs/tmp.txt

done