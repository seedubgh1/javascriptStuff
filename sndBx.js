var chkPoints = 2,
    chkPointPcnt = 0,
    gameLength = 17,
    currQuestion = 6,
		progress = 0;

chkPoints += 1;
console.log('Total checks: ',chkPoints);

chkPointPcnt = 100/chkPoints;
console.log('Chkpoint percent: ',chkPointPcnt);
chkPointPcnt = parseInt(chkPointPcnt);
console.log('Chkpoint percent: ',chkPointPcnt);

progress = currQuestion/gameLength;
console.log('Progress: ',progress);

progress = parseInt(progress * 100);
console.log('Progress: ', progress);

var idxs = new Array(3);
var chks = [];
idxs.forEach((num) => chks.push(1));

console.log(chks);

chks = Array.from(Array(chkPoints).keys());
chks.shift();
console.log('chks: ', chks);
chks = chks.map((num) => num * chkPointPcnt);
console.log('chksPcnt', chks);
