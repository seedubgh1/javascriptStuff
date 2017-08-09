var chkPoints = 3,
    chkPointPcnt = 0,
    gameLength = 7,
    currQuestion = 6,
		progress = 0;

console.log('Checkpoints: ',chkPoints);
chkPoints += 1;

chkPointPcnt = 100/chkPoints;
chkPointPcnt = parseInt(chkPointPcnt);
console.log('Chkpoint percent: ',chkPointPcnt);

console.log('Questions answered: ', currQuestion);
console.log('Total questions: ', gameLength);
progress = currQuestion/gameLength;
progress = parseInt(progress * 100);
console.log('Progress: ', progress + '%');

chks = Array.from(Array(chkPoints).keys())
chks.shift();
chks = chks.map((num) => num * chkPointPcnt);
console.log('chksPcnt', chks);

var nxtChk = chks.shift();
console.log('Next Check: ',nxtChk);
nxtChk = chks.shift();
console.log('Next Check: ',nxtChk);
nxtChk = chks.shift();
console.log('Next Check: ',nxtChk);
