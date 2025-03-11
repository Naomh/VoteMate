#!/bin/bash

CAND=2
GRP=1
VOT=170

sed -i '' -e "s/CANDIDATES_CNT:.*/CANDIDATES_CNT: $CAND,/g"  ../../lib/config.js
sed -i '' -e "s/GROUPS_CNT:.*/GROUPS_CNT: $GRP,/g"  ../../lib/config.js
sed -i '' -e "s/VOTERS_CNT:.*/VOTERS_CNT: $VOT,/g"  ../../lib/config.js

for i in 10 30 50 70 90 110 130 150 170 #{10..170..20}
do    

	sed -i '' -e "s/MPC_BATCH_SIZE:.*/MPC_BATCH_SIZE: $i,/g"  ../../lib/config.js
   
	for j in 50 100 150 200
	do
   		sed -i '' -e "s/RM_BATCH_SIZE:.*/RM_BATCH_SIZE: $j,/g"  ../../lib/config.js
		echo -n "mpc $i, rm $j: ";

		truffle test --bail --network advanced ../VotingC.js > ../test_logs/tmp.txt
		cat ../test_logs/tmp.txt >> test_logs/test_08_log.txt

		grep "Gas used in buildRightMarkers4MPC:" ../test_logs/tmp.txt
		grep "Gas used in compute MPC key:" ../test_logs/tmp.txt
		
	done
done