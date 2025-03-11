#!/bin/bash

GRP=1
RM=100

sed -i '' -e "s/GROUPS_CNT:.*/GROUPS_CNT: $GRP,/g"  ../../lib/config.js
sed -i '' -e "s/RM_BATCH_SIZE:.*/RM_BATCH_SIZE: $RM,/g"  ../../lib/config.js

for i in {3..6}
do

	sed -i '' -e "s/CANDIDATES_CNT:.*/CANDIDATES_CNT: $i,/g"  ../../lib/config.js

	for j in 10 20 30 40 50
	do
		sed -i '' -e "s/VOTERS_CNT:.*/VOTERS_CNT: $j,/g"  ../../lib/config.js
		sed -i '' -e "s/MPC_BATCH_SIZE:.*/MPC_BATCH_SIZE: $j,/g"  ../../lib/config.js
		
		echo -n "$i, $j: ";

		truffle test --bail --network advanced ../VotingC.js > ../test_logs/tmp.txt
		cat ../test_logs/tmp.txt >> test_logs/test_04_log.txt

		grep "Average gas used in submitVote by voter:" ../test_logs/tmp.txt
		grep "Gas used in computeTally by authority in group 0:" ../test_logs/tmp.txt
	
	done
done