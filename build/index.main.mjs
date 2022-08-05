// Automatically generated with Reach 0.1.11 (6e495417)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (6e495417)';
export const _backendVersion = 18;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Data({
    None: ctc7,
    Some: ctc2
    });
  const map0_ctc = ctc8;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc3, ctc6],
      2: [ctc0, ctc1, ctc2, ctc3, ctc6],
      4: [ctc0, ctc1, ctc2, ctc3, ctc6, ctc2],
      6: [ctc0, ctc1, ctc0, ctc6, ctc2],
      11: [ctc0, ctc1, ctc2, ctc2, ctc6, ctc2],
      12: [ctc0, ctc1, ctc2, ctc3, ctc2, ctc6, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Object({
    nftID: ctc3,
    numTickets: ctc1
    });
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc6 = stdlib.T_Digest;
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Address;
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc9]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v291 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v292 = [v291];
  const v305 = stdlib.protect(ctc4, await interact.startRaffle(), {
    at: './index.rsh:40:64:application',
    fs: ['at ./index.rsh:39:9:application call to [unknown function] (defined at: ./index.rsh:39:13:function exp)'],
    msg: 'startRaffle',
    who: 'Alice'
    });
  const v306 = v305.nftID;
  const v307 = v305.numTickets;
  const v310 = stdlib.protect(ctc1, await interact.getNum(v307), {
    at: './index.rsh:41:40:application',
    fs: ['at ./index.rsh:39:9:application call to [unknown function] (defined at: ./index.rsh:39:13:function exp)'],
    msg: 'getNum',
    who: 'Alice'
    });
  const v311 = stdlib.protect(ctc1, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:42:50:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:39:9:application call to [unknown function] (defined at: ./index.rsh:39:13:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v312 = stdlib.digest(ctc5, [v311, v310]);
  const v314 = stdlib.ge(v307, stdlib.checkedBigNumberify('./index.rsh:44:26:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v314, {
    at: './index.rsh:44:11:application',
    fs: ['at ./index.rsh:39:9:application call to [unknown function] (defined at: ./index.rsh:39:13:function exp)'],
    msg: null,
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v306, v307, v312],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:46:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc1, ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:46:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v316, v317, v318], secs: v320, time: v319, didSend: v52, from: v315 } = txn1;
      
      const v321 = v292[stdlib.checkedBigNumberify('./index.rsh:46:5:dot', stdlib.UInt_max, '0')];
      const v323 = v321[stdlib.checkedBigNumberify('./index.rsh:46:5:dot', stdlib.UInt_max, '1')];
      const v324 = v321[stdlib.checkedBigNumberify('./index.rsh:46:5:dot', stdlib.UInt_max, '2')];
      const v325 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v323, v324];
      const v326 = stdlib.Array_set(v292, stdlib.checkedBigNumberify('./index.rsh:46:5:dot', stdlib.UInt_max, '0'), v325);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v316
        });
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v316, v317, v318], secs: v320, time: v319, didSend: v52, from: v315 } = txn1;
  const v321 = v292[stdlib.checkedBigNumberify('./index.rsh:46:5:dot', stdlib.UInt_max, '0')];
  const v323 = v321[stdlib.checkedBigNumberify('./index.rsh:46:5:dot', stdlib.UInt_max, '1')];
  const v324 = v321[stdlib.checkedBigNumberify('./index.rsh:46:5:dot', stdlib.UInt_max, '2')];
  const v325 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v323, v324];
  const v326 = stdlib.Array_set(v292, stdlib.checkedBigNumberify('./index.rsh:46:5:dot', stdlib.UInt_max, '0'), v325);
  ;
  ;
  stdlib.protect(ctc0, await interact.seeHash(v318), {
    at: './index.rsh:47:21:application',
    fs: ['at ./index.rsh:47:21:application call to [unknown function] (defined at: ./index.rsh:47:21:function exp)', 'at ./index.rsh:47:21:application call to "liftedInteract" (defined at: ./index.rsh:47:21:application)'],
    msg: 'seeHash',
    who: 'Alice'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v315, v316, v317, v318, v326],
    evt_cnt: 0,
    funcNum: 1,
    lct: v319,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:50:5:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:3:13:decimal', stdlib.UInt_max, '1'), v316]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v331, time: v330, didSend: v63, from: v329 } = txn2;
      
      ;
      const v332 = v326[stdlib.checkedBigNumberify('./index.rsh:50:5:dot', stdlib.UInt_max, '0')];
      const v333 = v332[stdlib.checkedBigNumberify('./index.rsh:50:5:dot', stdlib.UInt_max, '0')];
      const v334 = stdlib.add(v333, stdlib.checkedBigNumberify('./index.rsh:3:13:decimal', stdlib.UInt_max, '1'));
      const v337 = v332[stdlib.checkedBigNumberify('./index.rsh:50:5:dot', stdlib.UInt_max, '1')];
      const v338 = v332[stdlib.checkedBigNumberify('./index.rsh:50:5:dot', stdlib.UInt_max, '2')];
      const v339 = [v334, v337, v338];
      const v340 = stdlib.Array_set(v326, stdlib.checkedBigNumberify('./index.rsh:50:5:dot', stdlib.UInt_max, '0'), v339);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:3:13:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v316
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc10, ctc3, ctc1, ctc6, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v331, time: v330, didSend: v63, from: v329 } = txn2;
  ;
  const v332 = v326[stdlib.checkedBigNumberify('./index.rsh:50:5:dot', stdlib.UInt_max, '0')];
  const v333 = v332[stdlib.checkedBigNumberify('./index.rsh:50:5:dot', stdlib.UInt_max, '0')];
  const v334 = stdlib.add(v333, stdlib.checkedBigNumberify('./index.rsh:3:13:decimal', stdlib.UInt_max, '1'));
  const v337 = v332[stdlib.checkedBigNumberify('./index.rsh:50:5:dot', stdlib.UInt_max, '1')];
  const v338 = v332[stdlib.checkedBigNumberify('./index.rsh:50:5:dot', stdlib.UInt_max, '2')];
  const v339 = [v334, v337, v338];
  const v340 = stdlib.Array_set(v326, stdlib.checkedBigNumberify('./index.rsh:50:5:dot', stdlib.UInt_max, '0'), v339);
  ;
  const v341 = stdlib.addressEq(v315, v329);
  stdlib.assert(v341, {
    at: './index.rsh:50:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const txn3 = await (ctc.sendrecv({
    args: [v315, v316, v317, v318, v340],
    evt_cnt: 0,
    funcNum: 2,
    lct: v330,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:53:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v344, time: v343, didSend: v68, from: v342 } = txn3;
      
      ;
      
      const v348 = stdlib.checkedBigNumberify('./index.rsh:61:18:decimal', stdlib.UInt_max, '0');
      const v349 = v343;
      const v355 = v340;
      const v356 = stdlib.checkedBigNumberify('./index.rsh:38:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v363 = stdlib.lt(v348, v317);
        
        return v363;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc10, ctc3, ctc1, ctc6, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v344, time: v343, didSend: v68, from: v342 } = txn3;
  ;
  const v345 = stdlib.addressEq(v315, v342);
  stdlib.assert(v345, {
    at: './index.rsh:53:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:55:19:application',
    fs: ['at ./index.rsh:54:9:application call to [unknown function] (defined at: ./index.rsh:54:13:function exp)'],
    msg: 'ready',
    who: 'Alice'
    });
  
  let v348 = stdlib.checkedBigNumberify('./index.rsh:61:18:decimal', stdlib.UInt_max, '0');
  let v349 = v343;
  let v355 = v340;
  let v356 = stdlib.checkedBigNumberify('./index.rsh:38:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v363 = stdlib.lt(v348, v317);
    
    return v363;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 8,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v372], secs: v374, time: v373, didSend: v112, from: v371 } = txn4;
    undefined /* setApiDetails */;
    ;
    const v376 = v372[stdlib.checkedBigNumberify('./index.rsh:64:9:spread', stdlib.UInt_max, '0')];
    await txn4.getOutput('attachersAPI_insertNum', 'v376', ctc1, v376);
    await stdlib.mapSet(map0, v371, v376);
    const v383 = stdlib.add(v348, stdlib.checkedBigNumberify('./index.rsh:70:44:decimal', stdlib.UInt_max, '1'));
    const cv348 = v383;
    const cv349 = v373;
    const cv355 = v355;
    const cv356 = v356;
    
    v348 = cv348;
    v349 = cv349;
    v355 = cv355;
    v356 = cv356;
    
    continue;
    
    }
  const txn4 = await (ctc.sendrecv({
    args: [v315, v316, v317, v318, v355, v356, v311, v310],
    evt_cnt: 2,
    funcNum: 4,
    lct: v349,
    onlyIf: true,
    out_tys: [ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:80:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v387, v388], secs: v390, time: v389, didSend: v132, from: v386 } = txn4;
      
      ;
      
      const v395 = true;
      const v396 = v317;
      const v397 = v315;
      const v398 = v389;
      const v404 = v355;
      const v405 = v356;
      
      if (await (async () => {
        const v413 = stdlib.ge(v396, stdlib.checkedBigNumberify('./index.rsh:91:44:decimal', stdlib.UInt_max, '1'));
        const v414 = v395 ? v413 : false;
        
        return v414;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc10, ctc3, ctc1, ctc6, ctc12, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v387, v388], secs: v390, time: v389, didSend: v132, from: v386 } = txn4;
  ;
  const v391 = stdlib.addressEq(v315, v386);
  stdlib.assert(v391, {
    at: './index.rsh:80:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v392 = stdlib.digest(ctc5, [v387, v388]);
  const v393 = stdlib.digestEq(v318, v392);
  stdlib.assert(v393, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:83:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Alice'
    });
  stdlib.protect(ctc0, await interact.showWinningNum(v388), {
    at: './index.rsh:85:28:application',
    fs: ['at ./index.rsh:85:28:application call to [unknown function] (defined at: ./index.rsh:85:28:function exp)', 'at ./index.rsh:85:28:application call to "liftedInteract" (defined at: ./index.rsh:85:28:application)'],
    msg: 'showWinningNum',
    who: 'Alice'
    });
  
  let v395 = true;
  let v396 = v317;
  let v397 = v315;
  let v398 = v389;
  let v404 = v355;
  let v405 = v356;
  
  while (await (async () => {
    const v413 = stdlib.ge(v396, stdlib.checkedBigNumberify('./index.rsh:91:44:decimal', stdlib.UInt_max, '1'));
    const v414 = v395 ? v413 : false;
    
    return v414;})()) {
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 7,
      out_tys: [ctc8],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v421], secs: v423, time: v422, didSend: v180, from: v420 } = txn5;
    undefined /* setApiDetails */;
    ;
    const v425 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v420), null);
    const v426 = stdlib.fromSome(v425, stdlib.checkedBigNumberify('./index.rsh:95:58:decimal', stdlib.UInt_max, '0'));
    const v427 = stdlib.eq(v426, v388);
    const v428 = v427 ? stdlib.checkedBigNumberify('./index.rsh:26:78:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:26:82:decimal', stdlib.UInt_max, '1');
    const v430 = ' - ';
    stdlib.protect(ctc0, await interact.log(v426, v430, v388), {
      at: './index.rsh:97:23:application',
      fs: ['at ./index.rsh:97:23:application call to [unknown function] (defined at: ./index.rsh:97:23:function exp)', 'at ./index.rsh:97:23:application call to "liftedInteract" (defined at: ./index.rsh:97:23:application)', 'at ./index.rsh:93:11:application call to [unknown function] (defined at: ./index.rsh:93:11:function exp)'],
      msg: 'log',
      who: 'Alice'
      });
    
    stdlib.protect(ctc0, await interact.log(v428, v430, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0')), {
      at: './index.rsh:98:23:application',
      fs: ['at ./index.rsh:98:23:application call to [unknown function] (defined at: ./index.rsh:98:23:function exp)', 'at ./index.rsh:98:23:application call to "liftedInteract" (defined at: ./index.rsh:98:23:application)', 'at ./index.rsh:93:11:application call to [unknown function] (defined at: ./index.rsh:93:11:function exp)'],
      msg: 'log',
      who: 'Alice'
      });
    
    const v433 = stdlib.eq(v428, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    if (v433) {
      const v434 = true;
      await txn5.getOutput('attachersAPI_checkWinner', 'v434', ctc9, v434);
      const v440 = stdlib.sub(v396, stdlib.checkedBigNumberify('./index.rsh:101:42:decimal', stdlib.UInt_max, '1'));
      const cv395 = false;
      const cv396 = v440;
      const cv397 = v420;
      const cv398 = v422;
      const cv404 = v404;
      const cv405 = v405;
      
      v395 = cv395;
      v396 = cv396;
      v397 = cv397;
      v398 = cv398;
      v404 = cv404;
      v405 = cv405;
      
      continue;}
    else {
      const v446 = false;
      await txn5.getOutput('attachersAPI_checkWinner', 'v446', ctc9, v446);
      const v452 = stdlib.sub(v396, stdlib.checkedBigNumberify('./index.rsh:104:41:decimal', stdlib.UInt_max, '1'));
      const cv395 = true;
      const cv396 = v452;
      const cv397 = v315;
      const cv398 = v422;
      const cv404 = v404;
      const cv405 = v405;
      
      v395 = cv395;
      v396 = cv396;
      v397 = cv397;
      v398 = cv398;
      v404 = cv404;
      v405 = cv405;
      
      continue;}
    
    }
  const txn5 = await (ctc.sendrecv({
    args: [v315, v316, v397, v404, v405],
    evt_cnt: 0,
    funcNum: 6,
    lct: v398,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:111:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn5) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v460, time: v459, didSend: v223, from: v458 } = txn5;
      
      ;
      const v462 = v404[stdlib.checkedBigNumberify('./index.rsh:115:14:application', stdlib.UInt_max, '0')];
      const v463 = v462[stdlib.checkedBigNumberify('./index.rsh:115:14:application', stdlib.UInt_max, '0')];
      const v464 = stdlib.ge(v463, stdlib.checkedBigNumberify('./index.rsh:3:13:decimal', stdlib.UInt_max, '1'));
      if (v464) {
        sim_r.txns.push({
          kind: 'from',
          to: v397,
          tok: v316
          });
        const v478 = stdlib.gt(v405, stdlib.checkedBigNumberify('./index.rsh:119:19:decimal', stdlib.UInt_max, '0'));
        if (v478) {
          sim_r.txns.push({
            kind: 'from',
            to: v315,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v316
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          sim_r.txns.push({
            kind: 'halt',
            tok: v316
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      else {
        const v495 = stdlib.gt(v405, stdlib.checkedBigNumberify('./index.rsh:119:19:decimal', stdlib.UInt_max, '0'));
        if (v495) {
          sim_r.txns.push({
            kind: 'from',
            to: v315,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v316
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          sim_r.txns.push({
            kind: 'halt',
            tok: v316
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc10, ctc3, ctc10, ctc12, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v460, time: v459, didSend: v223, from: v458 } = txn5;
  ;
  const v461 = stdlib.addressEq(v315, v458);
  stdlib.assert(v461, {
    at: './index.rsh:111:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v462 = v404[stdlib.checkedBigNumberify('./index.rsh:115:14:application', stdlib.UInt_max, '0')];
  const v463 = v462[stdlib.checkedBigNumberify('./index.rsh:115:14:application', stdlib.UInt_max, '0')];
  const v464 = stdlib.ge(v463, stdlib.checkedBigNumberify('./index.rsh:3:13:decimal', stdlib.UInt_max, '1'));
  if (v464) {
    ;
    const v478 = stdlib.gt(v405, stdlib.checkedBigNumberify('./index.rsh:119:19:decimal', stdlib.UInt_max, '0'));
    if (v478) {
      ;
      return;
      }
    else {
      return;
      }}
  else {
    const v495 = stdlib.gt(v405, stdlib.checkedBigNumberify('./index.rsh:119:19:decimal', stdlib.UInt_max, '0'));
    if (v495) {
      ;
      return;
      }
    else {
      return;
      }}
  
  
  
  
  
  
  
  
  
  };
export async function _attachersAPI_checkWinner11(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _attachersAPI_checkWinner11 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _attachersAPI_checkWinner11 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v315, v316, v388, v396, v404, v405] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11'), [ctc3, ctc4, ctc1, ctc1, ctc7, ctc1]);
  const v417 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:92:9:application call to [unknown function] (defined at: ./index.rsh:92:9:function exp)', 'at ./index.rsh:92:9:application call to [unknown function] (defined at: ./index.rsh:92:9:function exp)'],
    msg: 'in',
    who: 'attachersAPI_checkWinner'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v315, v316, v388, v396, v404, v405, v417],
    evt_cnt: 1,
    funcNum: 7,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:92:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v421], secs: v423, time: v422, didSend: v180, from: v420 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "attachersAPI_checkWinner"
        });
      ;
      const v425 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v420), null);
      const v426 = stdlib.fromSome(v425, stdlib.checkedBigNumberify('./index.rsh:95:58:decimal', stdlib.UInt_max, '0'));
      const v427 = stdlib.eq(v426, v388);
      const v428 = v427 ? stdlib.checkedBigNumberify('./index.rsh:26:78:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:26:82:decimal', stdlib.UInt_max, '1');
      const v433 = stdlib.eq(v428, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      if (v433) {
        const v434 = true;
        const v435 = await txn1.getOutput('attachersAPI_checkWinner', 'v434', ctc5, v434);
        
        const v718 = v420;
        const v720 = v404;
        const v721 = v405;
        sim_r.isHalt = false;
        }
      else {
        const v446 = false;
        const v447 = await txn1.getOutput('attachersAPI_checkWinner', 'v446', ctc5, v446);
        
        const v452 = stdlib.sub(v396, stdlib.checkedBigNumberify('./index.rsh:104:41:decimal', stdlib.UInt_max, '1'));
        const v735 = v452;
        const v736 = v315;
        const v738 = v404;
        const v739 = v405;
        const v740 = stdlib.ge(v452, stdlib.checkedBigNumberify('./index.rsh:91:44:decimal', stdlib.UInt_max, '1'));
        if (v740) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.isHalt = false;
          }}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc7, ctc1, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v421], secs: v423, time: v422, didSend: v180, from: v420 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v425 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v420), null);
  const v426 = stdlib.fromSome(v425, stdlib.checkedBigNumberify('./index.rsh:95:58:decimal', stdlib.UInt_max, '0'));
  const v427 = stdlib.eq(v426, v388);
  const v428 = v427 ? stdlib.checkedBigNumberify('./index.rsh:26:78:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:26:82:decimal', stdlib.UInt_max, '1');
  const v433 = stdlib.eq(v428, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
  if (v433) {
    const v434 = true;
    const v435 = await txn1.getOutput('attachersAPI_checkWinner', 'v434', ctc5, v434);
    if (v180) {
      stdlib.protect(ctc0, await interact.out(v421, v435), {
        at: './index.rsh:92:10:application',
        fs: ['at ./index.rsh:92:10:application call to [unknown function] (defined at: ./index.rsh:92:10:function exp)', 'at ./index.rsh:100:12:application call to "y" (defined at: ./index.rsh:93:11:function exp)', 'at ./index.rsh:93:11:application call to [unknown function] (defined at: ./index.rsh:93:11:function exp)'],
        msg: 'out',
        who: 'attachersAPI_checkWinner'
        });
      }
    else {
      }
    
    const v718 = v420;
    const v720 = v404;
    const v721 = v405;
    return;
    }
  else {
    const v446 = false;
    const v447 = await txn1.getOutput('attachersAPI_checkWinner', 'v446', ctc5, v446);
    if (v180) {
      stdlib.protect(ctc0, await interact.out(v421, v447), {
        at: './index.rsh:92:10:application',
        fs: ['at ./index.rsh:92:10:application call to [unknown function] (defined at: ./index.rsh:92:10:function exp)', 'at ./index.rsh:103:12:application call to "y" (defined at: ./index.rsh:93:11:function exp)', 'at ./index.rsh:93:11:application call to [unknown function] (defined at: ./index.rsh:93:11:function exp)'],
        msg: 'out',
        who: 'attachersAPI_checkWinner'
        });
      }
    else {
      }
    
    const v452 = stdlib.sub(v396, stdlib.checkedBigNumberify('./index.rsh:104:41:decimal', stdlib.UInt_max, '1'));
    const v735 = v452;
    const v736 = v315;
    const v738 = v404;
    const v739 = v405;
    const v740 = stdlib.ge(v452, stdlib.checkedBigNumberify('./index.rsh:91:44:decimal', stdlib.UInt_max, '1'));
    if (v740) {
      return;
      }
    else {
      return;
      }}
  
  
  };
export async function _attachersAPI_insertNum12(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _attachersAPI_insertNum12 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _attachersAPI_insertNum12 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Digest;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([ctc1]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v315, v316, v317, v318, v348, v355, v356] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12'), [ctc3, ctc4, ctc1, ctc5, ctc1, ctc8, ctc1]);
  const v366 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:64:9:application call to [unknown function] (defined at: ./index.rsh:64:9:function exp)', 'at ./index.rsh:64:9:application call to [unknown function] (defined at: ./index.rsh:64:9:function exp)'],
    msg: 'in',
    who: 'attachersAPI_insertNum'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v315, v316, v317, v318, v348, v355, v356, v366],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:64:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v372], secs: v374, time: v373, didSend: v112, from: v371 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "attachersAPI_insertNum"
        });
      ;
      const v376 = v372[stdlib.checkedBigNumberify('./index.rsh:64:9:spread', stdlib.UInt_max, '0')];
      const v377 = await txn1.getOutput('attachersAPI_insertNum', 'v376', ctc1, v376);
      
      await stdlib.simMapSet(sim_r, 0, v371, v376);
      const v383 = stdlib.add(v348, stdlib.checkedBigNumberify('./index.rsh:70:44:decimal', stdlib.UInt_max, '1'));
      const v752 = v383;
      const v754 = v355;
      const v755 = v356;
      const v756 = stdlib.lt(v383, v317);
      if (v756) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc5, ctc1, ctc8, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v372], secs: v374, time: v373, didSend: v112, from: v371 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v376 = v372[stdlib.checkedBigNumberify('./index.rsh:64:9:spread', stdlib.UInt_max, '0')];
  const v377 = await txn1.getOutput('attachersAPI_insertNum', 'v376', ctc1, v376);
  if (v112) {
    stdlib.protect(ctc0, await interact.out(v372, v377), {
      at: './index.rsh:64:10:application',
      fs: ['at ./index.rsh:64:10:application call to [unknown function] (defined at: ./index.rsh:64:10:function exp)', 'at ./index.rsh:67:12:application call to "y" (defined at: ./index.rsh:65:16:function exp)', 'at ./index.rsh:65:16:application call to [unknown function] (defined at: ./index.rsh:65:16:function exp)'],
      msg: 'out',
      who: 'attachersAPI_insertNum'
      });
    }
  else {
    }
  
  await stdlib.mapSet(map0, v371, v376);
  const v383 = stdlib.add(v348, stdlib.checkedBigNumberify('./index.rsh:70:44:decimal', stdlib.UInt_max, '1'));
  const v752 = v383;
  const v754 = v355;
  const v755 = v356;
  const v756 = stdlib.lt(v383, v317);
  if (v756) {
    return;
    }
  else {
    return;
    }
  
  
  };
export async function attachersAPI_checkWinner(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for attachersAPI_checkWinner expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for attachersAPI_checkWinner expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 11) {return _attachersAPI_checkWinner11(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function attachersAPI_insertNum(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for attachersAPI_insertNum expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for attachersAPI_insertNum expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 12) {return _attachersAPI_insertNum12(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`attachersAPI_checkWinner()byte`, `attachersAPI_insertNum(uint64)uint64`],
    pure: [],
    sigs: [`attachersAPI_checkWinner()byte`, `attachersAPI_insertNum(uint64)uint64`]
    },
  appApproval: `BiANAAEECCAoAgYJhcK64QwMC6CNBiYDAQAAAQEiNQAxGEEFcilkSSJbNQElWzUCMRkjEkEACjEAKCEIr2ZCBT82GgAXSUEAIyI1BCM1BkkhCQxAAAghCRJEKUIAooGVkdbtCBJENhoBQgAjNhoCFzUENhoDNhoBF0kkDEACkEmBBwxAASVJJQxAAHMlEkQhCjQBEkQ0BEkiEkw0AhIRRChkNQNJNQU1/4AEZh/u1jT/ULA0/xc1/oAIAAAAAAAAAXg0/hZQsDT+FjUHMQAoKjT+FlBmNANXACA0AyEEWzQDIQVbNANXMCA0A4FQWyMIMgY0A1dYETQDgWlbQgN4SCELNAESRDQESSISTDQCEhFEKGRJNQNJSkpXACA1/yEEWzX+IQVbNf2BMFs1/Fc4ETX7gUlbNfpJNQU1+YAE3Kom3jT5ULAjIiIxAIgEZ0k1+CNbNPgiVU00/RJNIhJBACWACQAAAAAAAAGyAbAqNQc0/zT+NP0iNPwjCTEAMgY0+zT6QgNagAkAAAAAAAABvgCwKDUHNP80/jT9IzT8Iwk0/zIGNPs0+kIDNUkhBwxAAPBIIQc0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8hBFs1/oFZWzX9gARhtKwMsDT/MQASRDQDV0gRVwARIlsjD0EAYbEisgEjshIkshA0A1coILIUNP6yEbM0/SINQQAqsSKyATT9sggjshA0/7IHs7EisgEishIkshAyCbIVMgqyFDT+shGzQgMKsSKyASKyEiSyEDIJshUyCrIUNP6yEbNCAvA0/SINQQAqsSKyATT9sggjshA0/7IHs7EisgEishIkshAyCbIVMgqyFDT+shGzQgK/sSKyASKyEiSyEDIJshUyCrIUNP6yEbNCAqUkEkQkNAESRDQESSISTDQCEhFEKGRJNQNXACA1/0k1BUkiWzX+JVs1/YAEEEatczT+FlA0/RZQsDT/MQASRDQDVzAgNP4WNP0WUAESRDT/NAMhBFs0/SM0AyEFWzT/MgY0A1dQETQDgWFbQgHRSSMMQADTSSEGDEAASSEGEkQhBjQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf+ABEGxQE2wNP8xABJENP80AyEEWzQDIQVbNANXMCAiMgY0A1dQESJCARJIIzQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8hBFs1/iEFWzX9VzAgNfxXUBE1+4AEmouRdLA0+1cAEUk1+iJbIwgWNPpXCAhQNPpXEAFQNfkjNP6IAh00/zEAEkQ0/zT+FlA0/RZQNPxQNPlQKEsBVwBhZ0ghBjUBMgY1AkIBe0ghDIgB1iI0ARJENARJIhJMNAISEURJNQVJSSJbNf8lWzX+VxAgNf2ABBYtKDs0/xZQNP4WUDT9ULCBEa9JNfxXABE1+yWvNPtXCAhQNPtXEAFQNfohDIgBgrEisgEishIkshAyCrIUNP+yEbMxADT/FlA0/hZQNP1QNPpQKEsBVwBhZ0gjNQEyBjUCQgDsNf81/jX9Nfw1+zX6Nfk1+DT8NPoMQQArNPg0+RZQNPoWUDT7UDT8FlA0/lA0/xZQKEsBVwBxZ0ghCjUBMgY1AkIAqTT4NPkWUDT6FlA0+1A0/lA0/xZQKEsBVwBpZ0gkNQEyBjUCQgCDNf81/jX9Nfw1+zX6Nfk1+DX3NPo0+yMPEEEAKDT3NPgWUDT5FlA0+xZQNP5QNP8WUChLAVcAUWdIIQs1ATIGNQJCAD809zT4FlA0/FA0/lA0/xZQKEsBVwBhZ0ghBzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhBjE1EkQiMTYSRCMxNxJEIjUBIjUCQv+uSTEYYUAABUghCK+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 9,
  stateKeys: 1,
  stateSize: 113,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v316",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v317",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v318",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v316",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v317",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v318",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v387",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v388",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v421",
                "type": "bool"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T24",
                "name": "v372",
                "type": "tuple"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v376",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v434",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v446",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v387",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v388",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v421",
                "type": "bool"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T24",
                "name": "v372",
                "type": "tuple"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "attachersAPI_checkWinner",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "attachersAPI_insertNum",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620028a6380380620028a683398101604081905262000026916200041b565b60008055436003556200003862000247565b6040805133815283516020808301919091528085015180516001600160a01b031683850152908101516060830152820151608082015290517fb77e0b7275941fdbf00765e1e98b79777de983c0eaec6159504ea2e32b7160649181900360a00190a180516000908190528151602090810182905282516040908101839052835182850180519190915281850180518590528151518401518151909401939093528051518201518351901515920191909152519051620000f892906200019a565b60608201526200010b341560076200021d565b62000115620002ae565b33815260208084018051516001600160a01b03168284015280518201516040808501919091529051810151606080850191909152840151608084015260016000819055439055516200016a91839101620004dd565b6040516020818303038152906040526002908051906020019062000190929190620002f1565b50505050620005c4565b620001a462000380565b60005b6001811015620001fa57848160018110620001c657620001c6620004c7565b6020020151828260018110620001e057620001e0620004c7565b602002015280620001f1816200055d565b915050620001a7565b5081818460018110620002115762000211620004c7565b60200201529392505050565b81620002435760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160e0810190915260006080820181815260a0830182905260c08301919091528152602081016200027a62000380565b81526040805160608101825260008082526020828101829052928201529101908152602001620002a962000380565b905290565b6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001620002a962000380565b828054620002ff9062000587565b90600052602060002090601f0160209004810192826200032357600085556200036e565b82601f106200033e57805160ff19168380011785556200036e565b828001600101855582156200036e579182015b828111156200036e57825182559160200191906001019062000351565b506200037c929150620003cd565b5090565b60405180602001604052806001905b620003b6604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816200038f5790505090565b5b808211156200037c5760008155600101620003ce565b604051606081016001600160401b03811182821017156200041557634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200042f57600080fd5b604080519081016001600160401b03811182821017156200046057634e487b7160e01b600052604160045260246000fd5b604052835181526060601f19830112156200047a57600080fd5b62000484620003e4565b60208501519092506001600160a01b0381168114620004a257600080fd5b8252604084810151602080850191909152606090950151908301529283015250919050565b634e487b7160e01b600052603260045260246000fd5b81516001600160a01b03908116825260208084015190911681830152604080840151818401526060808501518185015260808086015160e08601949291860160005b60018110156200055157825180518352858101518684015286015115158683015291840191908301906001016200051f565b50505050505092915050565b60006000198214156200058057634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c908216806200059c57607f821691505b60208210811415620005be57634e487b7160e01b600052602260045260246000fd5b50919050565b6122d280620005d46000396000f3fe6080604052600436106100a55760003560e01c8063832307571161006157806383230757146101505780638f3c54f414610165578063ab53f2c614610178578063c79800371461019b578063e73f7147146101ae578063ebdbfdcc146101c157005b80630ca328e4146100ae57806312e6ec0b146100c15780631e93b0f1146100de5780632c10a159146100fd5780633bc5b7bf146101105780637eea518c1461013d57005b366100ac57005b005b6100ac6100bc3660046119ed565b6101d4565b6100c9610204565b60405190151581526020015b60405180910390f35b3480156100ea57600080fd5b506003545b6040519081526020016100d5565b6100ac61010b3660046119ed565b61023c565b34801561011c57600080fd5b5061013061012b366004611a1e565b610268565b6040516100d59190611a51565b6100ac61014b3660046119ed565b610294565b34801561015c57600080fd5b506001546100ef565b6100ac6101733660046119ed565b6102c0565b34801561018457600080fd5b5061018d6102ec565b6040516100d5929190611ac2565b6100ac6101a93660046119ed565b610389565b6100ef6101bc366004611afc565b6103b5565b6100ac6101cf366004611b15565b6103f4565b60408051808201909152600080825260208201526102006101fa36849003840184611bcf565b82610420565b5050565b600061020e61166d565b60208082015160009081905260408051808201909152818152918201526102358282610634565b5192915050565b604080518082019091526000808252602082015261020061026236849003840184611c34565b82610949565b604080516060810182526000808252602082018190529181019190915261028e82610b6d565b92915050565b60408051808201909152600080825260208201526102006102ba36849003840184611c34565b82610c3f565b60408051808201909152600080825260208201526102006102e636849003840184611c6c565b82610634565b60006060600054600280805461030190611cc6565b80601f016020809104026020016040519081016040528092919081815260200182805461032d90611cc6565b801561037a5780601f1061034f5761010080835404028352916020019161037a565b820191906000526020600020905b81548152906001019060200180831161035d57829003601f168201915b50505050509050915091509091565b60408051808201909152600080825260208201526102006103af36849003840184611c34565b82610ddb565b60006103bf61169c565b60208082015151849052604080518082019091526000808252918101919091526103e98282610420565b602001519392505050565b604080518082019091526000808252602082015261020061041a36849003840184611cfb565b82610f9e565b610430600c60005414601e6111b5565b815161044b90158061044457508251600154145b601f6111b5565b60008080556002805461045d90611cc6565b80601f016020809104026020016040519081016040528092919081815260200182805461048990611cc6565b80156104d65780601f106104ab576101008083540402835291602001916104d6565b820191906000526020600020905b8154815290600101906020018083116104b957829003601f168201915b50505050508060200190518101906104ee9190611dde565b60408051338152855160208083019190915286015151518183015290519192507f0d0c50c34bf538d7a3a69bc85bb10bcfe23f8f46c119741a7807a8319a6ae248919081900360600190a16105453415601d6111b5565b60208381015151516040519081527fbaddb68e562586848025f335a4af67b86d28e695afbc17202f5d8e80b7535d26910160405180910390a16020838101805151518483015233600090815260049092526040909120805460ff191660019081178255915151519101556105b76116c9565b815181516001600160a01b0391821690526020808401518351921691015260408083015182519091015260608083015182519091015260808201516105fe90600190611e92565b602080830180519290925281514391015260a083015181516040015260c083015190516060015261062e816111db565b50505050565b610644600b60005414601b6111b5565b815161065f90158061065857508251600154145b601c6111b5565b60008080556002805461067190611cc6565b80601f016020809104026020016040519081016040528092919081815260200182805461069d90611cc6565b80156106ea5780601f106106bf576101008083540402835291602001916106ea565b820191906000526020600020905b8154815290600101906020018083116106cd57829003601f168201915b50505050508060200190518101906107029190611f41565b6040805133815285516020808301919091528601515115158183015290519192507f4e3b66664dfaa8eec55d3e4b5320be5906866b0f0eff2c9c5b88206afe3bdf8d919081900360600190a161075a3415601a6111b5565b6040810151600090600161076d33610b6d565b51600181111561077f5761077f611a3b565b1461078b576000610799565b61079433610b6d565b604001515b146107a55760016107a8565b60005b141561087357604051600181527f0a43eb641153829f058758a6c4b44f3d414f21aa5cb082bb9a0a35adfe84e20c9060200160405180910390a1600182526107ee611700565b815181516001600160a01b039182169052602080840151835192169181019190915260408084015183519091015281015160009052606082015161083490600190611f5e565b602080830180519091019190915280513360409091015280514360609091015260808084015182519091015260a0808401519151015261062e816112f0565b604051600081527f23a1dfd135526bfa3fbad156b541a37316a035f6d42506abab6704ca4d6d0d099060200160405180910390a1600082526108b3611700565b815181516001600160a01b039182169052602080840151835192169181019190915260408084015183519091015281015160019081905260608301516108f99190611f5e565b6020808301805190910191909152825181516001600160a01b0390911660409091015280514360609091015260808084015182519091015260a0808401519151015261062e816112f0565b505050565b610959600160005414600b6111b5565b815161097490158061096d57508251600154145b600c6111b5565b60008080556002805461098690611cc6565b80601f01602080910402602001604051908101604052809291908181526020018280546109b290611cc6565b80156109ff5780601f106109d4576101008083540402835291602001916109ff565b820191906000526020600020905b8154815290600101906020018083116109e257829003601f168201915b5050505050806020019051810190610a179190611fdf565b9050610a21611730565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f13385604051610a52929190611ffb565b60405180910390a1610a66341560086111b5565b60808201515151610a7990600190611e92565b815152608082018051516020908101518351909101528051516040908101518351901515910152518151610ab091906000906113e7565b8160200181905250610ad2610acb338460200151600161145b565b60096111b5565b8151610aea906001600160a01b03163314600a6111b5565b610af2611760565b82516001600160a01b03908116825260208085015190911681830152604080850151818401526060808601519084015283820151608084015260026000554360015551610b4191839101612077565b60405160208183030381529060405260029080519060200190610b659291906117a1565b505050505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610bb957610bb9611a3b565b1415610c30576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610bfa57610bfa611a3b565b6001811115610c0b57610c0b611a3b565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b610c4f600260005414600f6111b5565b8151610c6a901580610c6357508251600154145b60106111b5565b600080805560028054610c7c90611cc6565b80601f0160208091040260200160405190810160405280929190818152602001828054610ca890611cc6565b8015610cf55780601f10610cca57610100808354040283529160200191610cf5565b820191906000526020600020905b815481529060010190602001808311610cd857829003601f168201915b5050505050806020019051810190610d0d9190611fdf565b90507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d9503384604051610d40929190611ffb565b60405180910390a1610d543415600d6111b5565b8051610d6c906001600160a01b03163314600e6111b5565b610d746116c9565b815181516001600160a01b039182169052602080840151835192169181019190915260408084015183518201526060808501518451820152828401805160009081905281514395019490945260808601518151909301929092529051015261062e816111db565b610deb60066000541460186111b5565b8151610e06901580610dff57508251600154145b60196111b5565b600080805560028054610e1890611cc6565b80601f0160208091040260200160405190810160405280929190818152602001828054610e4490611cc6565b8015610e915780601f10610e6657610100808354040283529160200191610e91565b820191906000526020600020905b815481529060010190602001808311610e7457829003601f168201915b5050505050806020019051810190610ea991906120c5565b90507fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae3384604051610edc929190611ffb565b60405180910390a1610ef0341560166111b5565b8051610f08906001600160a01b0316331460176111b5565b60608101515151600111610f2a57610f2a816020015182604001516001611473565b608081015115610f8857805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610f71573d6000803e3d6000fd5b506000808055600181905561094490600290611825565b6000808055600181905561094490600290611825565b610fae60046000541460146111b5565b8151610fc9901580610fc257508251600154145b60156111b5565b600080805560028054610fdb90611cc6565b80601f016020809104026020016040519081016040528092919081815260200182805461100790611cc6565b80156110545780601f1061102957610100808354040283529160200191611054565b820191906000526020600020905b81548152906001019060200180831161103757829003601f168201915b505050505080602001905181019061106c9190611f41565b604080513381528551602080830191909152808701518051838501520151606082015290519192507fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a919081900360800190a16110cb341560116111b5565b80516110e3906001600160a01b0316331460126111b5565b6020808401518051908201516040516111319361110b93929101918252602082015260400190565b6040516020818303038152906040528051906020012060001c82606001511460136111b5565b611139611700565b815181516001600160a01b0391821690526020808401518351908316908201528581015181015183516040908101919091528184018051600190528186015181519093019290925284518251931692019190915280514360609091015260808084015182519091015260a0808401519151015261062e816112f0565b816102005760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b8051604001516020820151511015611283576111f561185f565b8151516001600160a01b0390811682528251602090810151909116818301528251604090810151818401528351606090810151818501528285018051516080860152805183015160a086015251015160c0840152600c600055436001555161125f91839101612136565b604051602081830303815290604052600290805190602001906109449291906117a1565b61128b6118b4565b8151516001600160a01b0390811682528251602090810151909116818301528251604090810151818401528351606090810151818501528285018051830151608086015251015160a08401526004600055436001555161125f918391016121e9565b50565b60208101515161130157600061130f565b600181602001516020015110155b156113815761131c6118b4565b8151516001600160a01b039081168252825160209081015190911681830152825160409081015181840152818401805183015160608501528051608090810151908501525160a09081015190840152600b600055436001555161125f918391016121e9565b6113896118f5565b8151516001600160a01b039081168252825160209081015182168184015280840180516040908101519093168385015280516080908101516060860152905160a0015190840152600660005543600155905161125f918391016121f8565b6113ef61191a565b60005b600181101561143b5784816001811061140d5761140d612023565b602002015182826001811061142457611424612023565b60200201528061143381612248565b9150506113f2565b508181846001811061144f5761144f612023565b60200201529392505050565b600061146983853085611487565b90505b9392505050565b61147e838383611561565b61094457600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916114ee91612263565b60006040518083038185875af1925050503d806000811461152b576040519150601f19603f3d011682016040523d82523d6000602084013e611530565b606091505b509150915061154182826001611632565b5080806020019051810190611556919061227f565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839283929188169183916115c091612263565b60006040518083038185875af1925050503d80600081146115fd576040519150601f19603f3d011682016040523d82523d6000602084013e611602565b606091505b509150915061161382826002611632565b5080806020019051810190611628919061227f565b9695505050505050565b6060831561164157508161146c565b8251156116515782518084602001fd5b60405163100960cb60e01b8152600481018390526024016111d2565b60405180604001604052806000815260200161169760405180602001604052806000151581525090565b905290565b60405180604001604052806000815260200161169760408051808201909152600060208201908152815290565b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290815260208101611697611965565b6040805160a081018252600091810182815260608201839052608082019290925290815260208101611697611986565b6040805160a08101825260009181018281526060820183905260808201929092529081526020810161169761191a565b6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200161169761191a565b8280546117ad90611cc6565b90600052602060002090601f0160209004810192826117cf5760008555611815565b82601f106117e857805160ff1916838001178555611815565b82800160010185558215611815579182015b828111156118155782518255916020019190600101906117fa565b506118219291506119c0565b5090565b50805461183190611cc6565b6000825580601f10611841575050565b601f0160209004906000526020600020908101906112ed91906119c0565b6040518060e0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016118a761191a565b8152602001600081525090565b6040518060c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016118a761191a565b6040805160a08101825260008082526020820181905291810191909152606081016118a75b60405180602001604052806001905b61194f604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816119295790505090565b604051806080016040528060008152602001600081526020016118a761191a565b6040518060c001604052806000151581526020016000815260200160006001600160a01b03168152602001600081526020016118a761191a565b5b8082111561182157600081556001016119c1565b6000604082840312156119e757600080fd5b50919050565b6000604082840312156119ff57600080fd5b61146c83836119d5565b6001600160a01b03811681146112ed57600080fd5b600060208284031215611a3057600080fd5b813561146c81611a09565b634e487b7160e01b600052602160045260246000fd5b8151606082019060028110611a7657634e487b7160e01b600052602160045260246000fd5b808352506020830151151560208301526040830151604083015292915050565b60005b83811015611ab1578181015183820152602001611a99565b8381111561062e5750506000910152565b8281526040602082015260008251806040840152611ae7816060850160208701611a96565b601f01601f1916919091016060019392505050565b600060208284031215611b0e57600080fd5b5035919050565b6000606082840312156119e757600080fd5b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715611b6057611b60611b27565b60405290565b6040516020810167ffffffffffffffff81118282101715611b6057611b60611b27565b6040516060810167ffffffffffffffff81118282101715611b6057611b60611b27565b60405160a0810167ffffffffffffffff81118282101715611b6057611b60611b27565b60008183036040811215611be257600080fd5b611bea611b3d565b833581526020601f1983011215611c0057600080fd5b611c08611b66565b9150611c12611b66565b602094850135815282529283015250919050565b80151581146112ed57600080fd5b600060408284031215611c4657600080fd5b611c4e611b3d565b823581526020830135611c6081611c26565b60208201529392505050565b60008183036040811215611c7f57600080fd5b611c87611b3d565b833581526020601f1983011215611c9d57600080fd5b611ca5611b66565b91506020840135611cb581611c26565b825260208101919091529392505050565b600181811c90821680611cda57607f821691505b602082108114156119e757634e487b7160e01b600052602260045260246000fd5b60008183036060811215611d0e57600080fd5b611d16611b3d565b833581526040601f1983011215611d2c57600080fd5b611d34611b3d565b60208581013582526040909501358582015293810193909352509092915050565b600082601f830112611d6657600080fd5b611d6e611b66565b80606080850186811115611d8157600080fd5b855b81811015611dd257828189031215611d9b5760008081fd5b611da3611b89565b8151815260208083015181830152604080840151611dc081611c26565b90830152908652909401938201611d83565b50919695505050505050565b60006101208284031215611df157600080fd5b60405160e0810181811067ffffffffffffffff82111715611e1457611e14611b27565b6040528251611e2281611a09565b81526020830151611e3281611a09565b80602083015250604083015160408201526060830151606082015260808301516080820152611e648460a08501611d55565b60a0820152610100929092015160c083015250919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115611ea557611ea5611e7c565b500190565b60006101008284031215611ebd57600080fd5b60405160c0810181811067ffffffffffffffff82111715611ee057611ee0611b27565b80604052508091508251611ef381611a09565b81526020830151611f0381611a09565b806020830152506040830151604082015260608301516060820152611f2b8460808501611d55565b608082015260e083015160a08201525092915050565b60006101008284031215611f5457600080fd5b61146c8383611eaa565b600082821015611f7057611f70611e7c565b500390565b600060e08284031215611f8757600080fd5b611f8f611bac565b90508151611f9c81611a09565b81526020820151611fac81611a09565b806020830152506040820151604082015260608201516060820152611fd48360808401611d55565b608082015292915050565b600060e08284031215611ff157600080fd5b61146c8383611f75565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b634e487b7160e01b600052603260045260246000fd5b8060005b600181101561062e57815180518552602080820151818701526040918201511515918601919091526060909401939091019060010161203d565b81516001600160a01b03908116825260208084015190911690820152604080830151908201526060808301519082015260808083015160e08301916120be90840182612039565b5092915050565b600060e082840312156120d757600080fd5b6120df611bac565b82516120ea81611a09565b815260208301516120fa81611a09565b6020820152604083015161210d81611a09565b604082015261211f8460608501611d55565b606082015260c09290920151608083015250919050565b60006101208201905060018060a01b038084511683528060208501511660208401525060408301516040830152606083015160608301526080830151608083015260a083015161218960a0840182612039565b5060c083015161010083015292915050565b60018060a01b0380825116835280602083015116602084015250604081015160408301526060810151606083015260808101516121db6080840182612039565b5060a0015160e09190910152565b610100810161028e828461219b565b81516001600160a01b0390811682526020808401518216908301526040808401519091169082015260608083015160e083019161223790840182612039565b50608083015160c083015292915050565b600060001982141561225c5761225c611e7c565b5060010190565b60008251612275818460208701611a96565b9190910192915050565b60006020828403121561229157600080fd5b815161146c81611c2656fea2646970667358221220a1a8b59324e42e68100d4571fc8971c3fbd55322f7013c7fd870bc1a43ab406a64736f6c634300080c0033`,
  BytecodeLen: 10406,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:48:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:51:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:79:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:110:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:124:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:124:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:124:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:124:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:89:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: './index.rsh:61:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "attachersAPI_checkWinner": attachersAPI_checkWinner,
  "attachersAPI_insertNum": attachersAPI_insertNum
  };
export const _APIs = {
  attachersAPI: {
    checkWinner: attachersAPI_checkWinner,
    insertNum: attachersAPI_insertNum
    }
  };
