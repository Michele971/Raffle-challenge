// Automatically generated with Reach 0.1.11 (7d2358ff)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (7d2358ff)';
export const _backendVersion = 17;

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
      4: [ctc0, ctc1, ctc3, ctc6, ctc2],
      6: [ctc0, ctc1, ctc0, ctc6, ctc2],
      11: [ctc0, ctc1, ctc2, ctc6, ctc2],
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
  
  
  const v255 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v256 = [v255];
  const v262 = stdlib.protect(ctc4, await interact.startRaffle(), {
    at: './index.rsh:37:64:application',
    fs: ['at ./index.rsh:36:9:application call to [unknown function] (defined at: ./index.rsh:36:13:function exp)'],
    msg: 'startRaffle',
    who: 'Alice'
    });
  const v263 = v262.nftID;
  const v264 = v262.numTickets;
  const v267 = stdlib.protect(ctc1, await interact.getNum(v264), {
    at: './index.rsh:38:40:application',
    fs: ['at ./index.rsh:36:9:application call to [unknown function] (defined at: ./index.rsh:36:13:function exp)'],
    msg: 'getNum',
    who: 'Alice'
    });
  const v268 = stdlib.protect(ctc1, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:39:50:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:36:9:application call to [unknown function] (defined at: ./index.rsh:36:13:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v269 = stdlib.digest(ctc5, [v268, v267]);
  const v271 = stdlib.ge(v264, stdlib.checkedBigNumberify('./index.rsh:41:26:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v271, {
    at: './index.rsh:41:11:application',
    fs: ['at ./index.rsh:36:9:application call to [unknown function] (defined at: ./index.rsh:36:13:function exp)'],
    msg: null,
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v263, v264, v269],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:43:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc1, ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:43:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v273, v274, v275], secs: v277, time: v276, didSend: v39, from: v272 } = txn1;
      
      const v278 = v256[stdlib.checkedBigNumberify('./index.rsh:43:5:dot', stdlib.UInt_max, '0')];
      const v280 = v278[stdlib.checkedBigNumberify('./index.rsh:43:5:dot', stdlib.UInt_max, '1')];
      const v281 = v278[stdlib.checkedBigNumberify('./index.rsh:43:5:dot', stdlib.UInt_max, '2')];
      const v282 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v280, v281];
      const v283 = stdlib.Array_set(v256, stdlib.checkedBigNumberify('./index.rsh:43:5:dot', stdlib.UInt_max, '0'), v282);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v273
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
  const {data: [v273, v274, v275], secs: v277, time: v276, didSend: v39, from: v272 } = txn1;
  const v278 = v256[stdlib.checkedBigNumberify('./index.rsh:43:5:dot', stdlib.UInt_max, '0')];
  const v280 = v278[stdlib.checkedBigNumberify('./index.rsh:43:5:dot', stdlib.UInt_max, '1')];
  const v281 = v278[stdlib.checkedBigNumberify('./index.rsh:43:5:dot', stdlib.UInt_max, '2')];
  const v282 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v280, v281];
  const v283 = stdlib.Array_set(v256, stdlib.checkedBigNumberify('./index.rsh:43:5:dot', stdlib.UInt_max, '0'), v282);
  ;
  ;
  stdlib.protect(ctc0, await interact.seeHash(v275), {
    at: './index.rsh:44:21:application',
    fs: ['at ./index.rsh:44:21:application call to [unknown function] (defined at: ./index.rsh:44:21:function exp)', 'at ./index.rsh:44:21:application call to "liftedInteract" (defined at: ./index.rsh:44:21:application)'],
    msg: 'seeHash',
    who: 'Alice'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v272, v273, v274, v275, v283],
    evt_cnt: 0,
    funcNum: 1,
    lct: v276,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:47:5:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:2:13:decimal', stdlib.UInt_max, '1'), v273]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v288, time: v287, didSend: v50, from: v286 } = txn2;
      
      ;
      const v289 = v283[stdlib.checkedBigNumberify('./index.rsh:47:5:dot', stdlib.UInt_max, '0')];
      const v290 = v289[stdlib.checkedBigNumberify('./index.rsh:47:5:dot', stdlib.UInt_max, '0')];
      const v291 = stdlib.add(v290, stdlib.checkedBigNumberify('./index.rsh:2:13:decimal', stdlib.UInt_max, '1'));
      const v294 = v289[stdlib.checkedBigNumberify('./index.rsh:47:5:dot', stdlib.UInt_max, '1')];
      const v295 = v289[stdlib.checkedBigNumberify('./index.rsh:47:5:dot', stdlib.UInt_max, '2')];
      const v296 = [v291, v294, v295];
      const v297 = stdlib.Array_set(v283, stdlib.checkedBigNumberify('./index.rsh:47:5:dot', stdlib.UInt_max, '0'), v296);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:2:13:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v273
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc10, ctc3, ctc1, ctc6, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v288, time: v287, didSend: v50, from: v286 } = txn2;
  ;
  const v289 = v283[stdlib.checkedBigNumberify('./index.rsh:47:5:dot', stdlib.UInt_max, '0')];
  const v290 = v289[stdlib.checkedBigNumberify('./index.rsh:47:5:dot', stdlib.UInt_max, '0')];
  const v291 = stdlib.add(v290, stdlib.checkedBigNumberify('./index.rsh:2:13:decimal', stdlib.UInt_max, '1'));
  const v294 = v289[stdlib.checkedBigNumberify('./index.rsh:47:5:dot', stdlib.UInt_max, '1')];
  const v295 = v289[stdlib.checkedBigNumberify('./index.rsh:47:5:dot', stdlib.UInt_max, '2')];
  const v296 = [v291, v294, v295];
  const v297 = stdlib.Array_set(v283, stdlib.checkedBigNumberify('./index.rsh:47:5:dot', stdlib.UInt_max, '0'), v296);
  ;
  const v298 = stdlib.addressEq(v272, v286);
  stdlib.assert(v298, {
    at: './index.rsh:47:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const txn3 = await (ctc.sendrecv({
    args: [v272, v273, v274, v275, v297],
    evt_cnt: 0,
    funcNum: 2,
    lct: v287,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:50:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v301, time: v300, didSend: v55, from: v299 } = txn3;
      
      ;
      
      const v305 = stdlib.checkedBigNumberify('./index.rsh:57:18:decimal', stdlib.UInt_max, '0');
      const v306 = v300;
      const v312 = v297;
      const v313 = stdlib.checkedBigNumberify('./index.rsh:35:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v320 = stdlib.lt(v305, v274);
        
        return v320;})()) {
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
  const {data: [], secs: v301, time: v300, didSend: v55, from: v299 } = txn3;
  ;
  const v302 = stdlib.addressEq(v272, v299);
  stdlib.assert(v302, {
    at: './index.rsh:50:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:52:19:application',
    fs: ['at ./index.rsh:51:9:application call to [unknown function] (defined at: ./index.rsh:51:13:function exp)'],
    msg: 'ready',
    who: 'Alice'
    });
  
  let v305 = stdlib.checkedBigNumberify('./index.rsh:57:18:decimal', stdlib.UInt_max, '0');
  let v306 = v300;
  let v312 = v297;
  let v313 = stdlib.checkedBigNumberify('./index.rsh:35:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v320 = stdlib.lt(v305, v274);
    
    return v320;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 8,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v329], secs: v331, time: v330, didSend: v99, from: v328 } = txn4;
    undefined /* setApiDetails */;
    ;
    const v333 = v329[stdlib.checkedBigNumberify('./index.rsh:60:9:spread', stdlib.UInt_max, '0')];
    await txn4.getOutput('attachersAPI_insertNum', 'v333', ctc1, v333);
    await stdlib.mapSet(map0, v328, v333);
    const v340 = stdlib.add(v305, stdlib.checkedBigNumberify('./index.rsh:70:44:decimal', stdlib.UInt_max, '1'));
    const cv305 = v340;
    const cv306 = v330;
    const cv312 = v312;
    const cv313 = v313;
    
    v305 = cv305;
    v306 = cv306;
    v312 = cv312;
    v313 = cv313;
    
    continue;
    
    }
  const txn4 = await (ctc.sendrecv({
    args: [v272, v273, v275, v312, v313, v268, v267],
    evt_cnt: 2,
    funcNum: 4,
    lct: v306,
    onlyIf: true,
    out_tys: [ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:81:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v344, v345], secs: v347, time: v346, didSend: v119, from: v343 } = txn4;
      
      ;
      const v351 = true;
      const v352 = v272;
      const v353 = v346;
      const v359 = v312;
      const v360 = v313;
      
      if (await (async () => {
        
        return v351;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc10, ctc3, ctc6, ctc12, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v344, v345], secs: v347, time: v346, didSend: v119, from: v343 } = txn4;
  ;
  const v348 = stdlib.addressEq(v272, v343);
  stdlib.assert(v348, {
    at: './index.rsh:81:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v349 = stdlib.digest(ctc5, [v344, v345]);
  const v350 = stdlib.digestEq(v275, v349);
  stdlib.assert(v350, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:83:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Alice'
    });
  let v351 = true;
  let v352 = v272;
  let v353 = v346;
  let v359 = v312;
  let v360 = v313;
  
  while (await (async () => {
    
    return v351;})()) {
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 7,
      out_tys: [ctc8],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v374], secs: v376, time: v375, didSend: v160, from: v373 } = txn5;
    undefined /* setApiDetails */;
    ;
    const v378 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v373), null);
    const v379 = stdlib.fromSome(v378, stdlib.checkedBigNumberify('./index.rsh:92:54:decimal', stdlib.UInt_max, '0'));
    const v380 = stdlib.eq(v379, v345);
    if (v380) {
      const v381 = true;
      await txn5.getOutput('attachersAPI_checkWinner', 'v381', ctc9, v381);
      const cv351 = false;
      const cv352 = v373;
      const cv353 = v375;
      const cv359 = v359;
      const cv360 = v360;
      
      v351 = cv351;
      v352 = cv352;
      v353 = cv353;
      v359 = cv359;
      v360 = cv360;
      
      continue;}
    else {
      const v391 = false;
      await txn5.getOutput('attachersAPI_checkWinner', 'v391', ctc9, v391);
      const cv351 = true;
      const cv352 = v272;
      const cv353 = v375;
      const cv359 = v359;
      const cv360 = v360;
      
      v351 = cv351;
      v352 = cv352;
      v353 = cv353;
      v359 = cv359;
      v360 = cv360;
      
      continue;}
    
    }
  const txn5 = await (ctc.sendrecv({
    args: [v272, v273, v352, v359, v360],
    evt_cnt: 0,
    funcNum: 6,
    lct: v353,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:105:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn5) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v403, time: v402, didSend: v187, from: v401 } = txn5;
      
      ;
      const v405 = v359[stdlib.checkedBigNumberify('./index.rsh:114:14:application', stdlib.UInt_max, '0')];
      const v406 = v405[stdlib.checkedBigNumberify('./index.rsh:114:14:application', stdlib.UInt_max, '0')];
      const v407 = stdlib.ge(v406, stdlib.checkedBigNumberify('./index.rsh:2:13:decimal', stdlib.UInt_max, '1'));
      if (v407) {
        sim_r.txns.push({
          kind: 'from',
          to: v352,
          tok: v273
          });
        const v421 = stdlib.gt(v360, stdlib.checkedBigNumberify('./index.rsh:117:19:decimal', stdlib.UInt_max, '0'));
        if (v421) {
          sim_r.txns.push({
            kind: 'from',
            to: v272,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v273
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
            tok: v273
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      else {
        const v438 = stdlib.gt(v360, stdlib.checkedBigNumberify('./index.rsh:117:19:decimal', stdlib.UInt_max, '0'));
        if (v438) {
          sim_r.txns.push({
            kind: 'from',
            to: v272,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v273
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
            tok: v273
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
  const {data: [], secs: v403, time: v402, didSend: v187, from: v401 } = txn5;
  ;
  const v404 = stdlib.addressEq(v272, v401);
  stdlib.assert(v404, {
    at: './index.rsh:105:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v405 = v359[stdlib.checkedBigNumberify('./index.rsh:114:14:application', stdlib.UInt_max, '0')];
  const v406 = v405[stdlib.checkedBigNumberify('./index.rsh:114:14:application', stdlib.UInt_max, '0')];
  const v407 = stdlib.ge(v406, stdlib.checkedBigNumberify('./index.rsh:2:13:decimal', stdlib.UInt_max, '1'));
  if (v407) {
    ;
    const v421 = stdlib.gt(v360, stdlib.checkedBigNumberify('./index.rsh:117:19:decimal', stdlib.UInt_max, '0'));
    if (v421) {
      ;
      return;
      }
    else {
      return;
      }}
  else {
    const v438 = stdlib.gt(v360, stdlib.checkedBigNumberify('./index.rsh:117:19:decimal', stdlib.UInt_max, '0'));
    if (v438) {
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
  
  
  const [v272, v273, v345, v359, v360] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11'), [ctc3, ctc4, ctc1, ctc7, ctc1]);
  const v370 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:90:9:application call to [unknown function] (defined at: ./index.rsh:90:9:function exp)', 'at ./index.rsh:90:9:application call to [unknown function] (defined at: ./index.rsh:90:9:function exp)'],
    msg: 'in',
    who: 'attachersAPI_checkWinner'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v272, v273, v345, v359, v360, v370],
    evt_cnt: 1,
    funcNum: 7,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:90:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v374], secs: v376, time: v375, didSend: v160, from: v373 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "attachersAPI_checkWinner"
        });
      ;
      const v378 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v373), null);
      const v379 = stdlib.fromSome(v378, stdlib.checkedBigNumberify('./index.rsh:92:54:decimal', stdlib.UInt_max, '0'));
      const v380 = stdlib.eq(v379, v345);
      if (v380) {
        const v381 = true;
        const v382 = await txn1.getOutput('attachersAPI_checkWinner', 'v381', ctc5, v381);
        
        const v656 = v373;
        const v658 = v359;
        const v659 = v360;
        sim_r.isHalt = false;
        }
      else {
        const v391 = false;
        const v392 = await txn1.getOutput('attachersAPI_checkWinner', 'v391', ctc5, v391);
        
        const v673 = v359;
        const v674 = v360;
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc7, ctc1, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v374], secs: v376, time: v375, didSend: v160, from: v373 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v378 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v373), null);
  const v379 = stdlib.fromSome(v378, stdlib.checkedBigNumberify('./index.rsh:92:54:decimal', stdlib.UInt_max, '0'));
  const v380 = stdlib.eq(v379, v345);
  if (v380) {
    const v381 = true;
    const v382 = await txn1.getOutput('attachersAPI_checkWinner', 'v381', ctc5, v381);
    if (v160) {
      stdlib.protect(ctc0, await interact.out(v374, v382), {
        at: './index.rsh:90:10:application',
        fs: ['at ./index.rsh:90:10:application call to [unknown function] (defined at: ./index.rsh:90:10:function exp)', 'at ./index.rsh:94:12:application call to "y" (defined at: ./index.rsh:91:11:function exp)', 'at ./index.rsh:91:11:application call to [unknown function] (defined at: ./index.rsh:91:11:function exp)'],
        msg: 'out',
        who: 'attachersAPI_checkWinner'
        });
      }
    else {
      }
    
    const v656 = v373;
    const v658 = v359;
    const v659 = v360;
    return;
    }
  else {
    const v391 = false;
    const v392 = await txn1.getOutput('attachersAPI_checkWinner', 'v391', ctc5, v391);
    if (v160) {
      stdlib.protect(ctc0, await interact.out(v374, v392), {
        at: './index.rsh:90:10:application',
        fs: ['at ./index.rsh:90:10:application call to [unknown function] (defined at: ./index.rsh:90:10:function exp)', 'at ./index.rsh:97:12:application call to "y" (defined at: ./index.rsh:91:11:function exp)', 'at ./index.rsh:91:11:application call to [unknown function] (defined at: ./index.rsh:91:11:function exp)'],
        msg: 'out',
        who: 'attachersAPI_checkWinner'
        });
      }
    else {
      }
    
    const v673 = v359;
    const v674 = v360;
    return;
    }
  
  
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
  
  
  const [v272, v273, v274, v275, v305, v312, v313] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12'), [ctc3, ctc4, ctc1, ctc5, ctc1, ctc8, ctc1]);
  const v323 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:60:9:application call to [unknown function] (defined at: ./index.rsh:60:9:function exp)', 'at ./index.rsh:60:9:application call to [unknown function] (defined at: ./index.rsh:60:9:function exp)'],
    msg: 'in',
    who: 'attachersAPI_insertNum'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v272, v273, v274, v275, v305, v312, v313, v323],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:60:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v329], secs: v331, time: v330, didSend: v99, from: v328 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "attachersAPI_insertNum"
        });
      ;
      const v333 = v329[stdlib.checkedBigNumberify('./index.rsh:60:9:spread', stdlib.UInt_max, '0')];
      const v334 = await txn1.getOutput('attachersAPI_insertNum', 'v333', ctc1, v333);
      
      await stdlib.simMapSet(sim_r, 0, v328, v333);
      const v340 = stdlib.add(v305, stdlib.checkedBigNumberify('./index.rsh:70:44:decimal', stdlib.UInt_max, '1'));
      const v685 = v340;
      const v687 = v312;
      const v688 = v313;
      const v689 = stdlib.lt(v340, v274);
      if (v689) {
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
  const {data: [v329], secs: v331, time: v330, didSend: v99, from: v328 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v333 = v329[stdlib.checkedBigNumberify('./index.rsh:60:9:spread', stdlib.UInt_max, '0')];
  const v334 = await txn1.getOutput('attachersAPI_insertNum', 'v333', ctc1, v333);
  if (v99) {
    stdlib.protect(ctc0, await interact.out(v329, v334), {
      at: './index.rsh:60:10:application',
      fs: ['at ./index.rsh:60:10:application call to [unknown function] (defined at: ./index.rsh:60:10:function exp)', 'at ./index.rsh:67:12:application call to "y" (defined at: ./index.rsh:61:16:function exp)', 'at ./index.rsh:61:16:application call to [unknown function] (defined at: ./index.rsh:61:16:function exp)'],
      msg: 'out',
      who: 'attachersAPI_insertNum'
      });
    }
  else {
    }
  
  await stdlib.mapSet(map0, v328, v333);
  const v340 = stdlib.add(v305, stdlib.checkedBigNumberify('./index.rsh:70:44:decimal', stdlib.UInt_max, '1'));
  const v685 = v340;
  const v687 = v312;
  const v688 = v313;
  const v689 = stdlib.lt(v340, v274);
  if (v689) {
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
  appApproval: `BiAOAAEECCACKAYJhcK64QwMC1mgjQYmAwEAAAEBIjUAMRhBBUwpZEkiWzUBJVs1AjEZIxJBAAoxACghCK9mQgUZNhoAF0lBACMiNQQjNQZJIQkMQAAIIQkSRClCAKKBlZHW7QgSRDYaAUIAIzYaAhc1BDYaAzYaARdJJAxAAnlJgQcMQAETSSUMQABzJRJEIQo0ARJENARJIhJMNAISEUQoZDUDSTUFNf+ABGYf7tY0/1CwNP8XNf6ACAAAAAAAAAFNNP4WULA0/hY1BzEAKCo0/hZQZjQDVwAgNAMhBFs0AyEGWzQDVzAgNAOBUFsjCDIGNANXWBE0A4FpW0IDYUghCzQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8hBFs1/iEGWzX9VzARNfyBQVs1+0k1BTX6gATcqibeNPpQsCIxAIgESEk1+SNbNPkiVU00/RJBACGACQAAAAAAAAF9AbAqNQc0/zT+NP0iMQAyBjT8NPtCA02ACQAAAAAAAAGHALAoNQc0/zT+NP0jNP8yBjT8NPtCAyxJIQcMQADwSCEHNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/IQRbNf4hDFs1/YAEYbSsDLA0/zEAEkQ0A1dIEVcAESJbIw9BAGGxIrIBI7ISJLIQNANXKCCyFDT+shGzNP0iDUEAKrEisgE0/bIII7IQNP+yB7OxIrIBIrISJLIQMgmyFTIKshQ0/rIRs0IC9rEisgEishIkshAyCbIVMgqyFDT+shGzQgLcNP0iDUEAKrEisgE0/bIII7IQNP+yB7OxIrIBIrISJLIQMgmyFTIKshQ0/rIRs0ICq7EisgEishIkshAyCbIVMgqyFDT+shGzQgKRJBJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf9JNQVJIls1/iVbNf2ABBBGrXM0/hZQNP0WULA0/zEAEkQ0A1coIDT+FjT9FlABEkQ0/zQDIQRbNP0jNP8yBjQDV0gRNAMhDFtCAc1JIwxAANNJIQUMQABJIQUSRCEFNAESRDQESSISTDQCEhFEKGRJNQNXACA1/4AEQbFATbA0/zEAEkQ0/zQDIQRbNAMhBls0A1cwICIyBjQDV1ARIkIBEkgjNAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yEEWzX+IQZbNf1XMCA1/FdQETX7gASai5F0sDT7VwARSTX6IlsjCBY0+lcICFA0+lcQAVA1+SM0/ogCDjT/MQASRDT/NP4WUDT9FlA0/FA0+VAoSwFXAGFnSCEFNQEyBjUCQgFsSCENiAHHIjQBEkQ0BEkiEkw0AhIRREk1BUlJIls1/yVbNf5XECA1/YAEFi0oOzT/FlA0/hZQNP1QsIERr0k1/FcAETX7Ja80+1cICFA0+1cQAVA1+iENiAFzsSKyASKyEiSyEDIKshQ0/7IRszEANP8WUDT+FlA0/VA0+lAoSwFXAGFnSCM1ATIGNQJCAN01/zX+Nf01/DX7Nfo1+TX4NPw0+gxBACs0+DT5FlA0+hZQNPtQNPwWUDT+UDT/FlAoSwFXAHFnSCEKNQEyBjUCQgCaNPg0+RZQNPtQNP5QNP8WUChLAVcAYWdIJDUBMgY1AkIAeDX/Nf41/TX8Nfs1+jX5Nfg0+0EAJDT4NPkWUDT6FlA0/lA0/xZQKEsBVwBJZ0ghCzUBMgY1AkIAPzT4NPkWUDT8UDT+UDT/FlAoSwFXAGFnSCEHNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEFMTUSRCIxNhJEIzE3EkQiNQEiNQJC/65JMRhhQAAFSCEIr4koYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECQSRDgRTwISRDgSEkSJ`,
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
                "name": "v273",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v274",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v275",
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
                "name": "v273",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v274",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v275",
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
                "name": "v344",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v345",
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
                "name": "v374",
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
                "name": "v329",
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
    "name": "_reach_oe_v333",
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
    "name": "_reach_oe_v381",
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
    "name": "_reach_oe_v391",
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
                "name": "v344",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v345",
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
                "name": "v374",
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
                "name": "v329",
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
  Bytecode: `0x6080604052604051620027bb380380620027bb83398101604081905262000026916200041b565b60008055436003556200003862000247565b6040805133815283516020808301919091528085015180516001600160a01b031683850152908101516060830152820151608082015290517fb77e0b7275941fdbf00765e1e98b79777de983c0eaec6159504ea2e32b7160649181900360a00190a180516000908190528151602090810182905282516040908101839052835182850180519190915281850180518590528151518401518151909401939093528051518201518351901515920191909152519051620000f892906200019a565b60608201526200010b341560076200021d565b62000115620002ae565b33815260208084018051516001600160a01b03168284015280518201516040808501919091529051810151606080850191909152840151608084015260016000819055439055516200016a91839101620004dd565b6040516020818303038152906040526002908051906020019062000190929190620002f1565b50505050620005c4565b620001a462000380565b60005b6001811015620001fa57848160018110620001c657620001c6620004c7565b6020020151828260018110620001e057620001e0620004c7565b602002015280620001f1816200055d565b915050620001a7565b5081818460018110620002115762000211620004c7565b60200201529392505050565b81620002435760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160e0810190915260006080820181815260a0830182905260c08301919091528152602081016200027a62000380565b81526040805160608101825260008082526020828101829052928201529101908152602001620002a962000380565b905290565b6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001620002a962000380565b828054620002ff9062000587565b90600052602060002090601f0160209004810192826200032357600085556200036e565b82601f106200033e57805160ff19168380011785556200036e565b828001600101855582156200036e579182015b828111156200036e57825182559160200191906001019062000351565b506200037c929150620003cd565b5090565b60405180602001604052806001905b620003b6604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816200038f5790505090565b5b808211156200037c5760008155600101620003ce565b604051606081016001600160401b03811182821017156200041557634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200042f57600080fd5b604080519081016001600160401b03811182821017156200046057634e487b7160e01b600052604160045260246000fd5b604052835181526060601f19830112156200047a57600080fd5b62000484620003e4565b60208501519092506001600160a01b0381168114620004a257600080fd5b8252604084810151602080850191909152606090950151908301529283015250919050565b634e487b7160e01b600052603260045260246000fd5b81516001600160a01b03908116825260208084015190911681830152604080840151818401526060808501518185015260808086015160e08601949291860160005b60018110156200055157825180518352858101518684015286015115158683015291840191908301906001016200051f565b50505050505092915050565b60006000198214156200058057634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c908216806200059c57607f821691505b60208210811415620005be57634e487b7160e01b600052602260045260246000fd5b50919050565b6121e780620005d46000396000f3fe6080604052600436106100a55760003560e01c8063832307571161006157806383230757146101505780638f3c54f414610165578063ab53f2c614610178578063c79800371461019b578063e73f7147146101ae578063ebdbfdcc146101c157005b80630ca328e4146100ae57806312e6ec0b146100c15780631e93b0f1146100de5780632c10a159146100fd5780633bc5b7bf146101105780637eea518c1461013d57005b366100ac57005b005b6100ac6100bc366004611954565b6101d4565b6100c9610204565b60405190151581526020015b60405180910390f35b3480156100ea57600080fd5b506003545b6040519081526020016100d5565b6100ac61010b366004611954565b61023c565b34801561011c57600080fd5b5061013061012b366004611985565b610268565b6040516100d591906119b8565b6100ac61014b366004611954565b610294565b34801561015c57600080fd5b506001546100ef565b6100ac610173366004611954565b6102c0565b34801561018457600080fd5b5061018d6102ec565b6040516100d5929190611a29565b6100ac6101a9366004611954565b610389565b6100ef6101bc366004611a63565b6103b5565b6100ac6101cf366004611a7c565b6103f4565b60408051808201909152600080825260208201526102006101fa36849003840184611b36565b82610420565b5050565b600061020e6115e2565b60208082015160009081905260408051808201909152818152918201526102358282610634565b5192915050565b604080518082019091526000808252602082015261020061026236849003840184611b9b565b826108ef565b604080516060810182526000808252602082018190529181019190915261028e82610b13565b92915050565b60408051808201909152600080825260208201526102006102ba36849003840184611b9b565b82610be5565b60408051808201909152600080825260208201526102006102e636849003840184611bd3565b82610634565b60006060600054600280805461030190611c2d565b80601f016020809104026020016040519081016040528092919081815260200182805461032d90611c2d565b801561037a5780601f1061034f5761010080835404028352916020019161037a565b820191906000526020600020905b81548152906001019060200180831161035d57829003601f168201915b50505050509050915091509091565b60408051808201909152600080825260208201526102006103af36849003840184611b9b565b82610d81565b60006103bf611611565b60208082015151849052604080518082019091526000808252918101919091526103e98282610420565b602001519392505050565b604080518082019091526000808252602082015261020061041a36849003840184611c62565b82610f44565b610430600c60005414601e611150565b815161044b90158061044457508251600154145b601f611150565b60008080556002805461045d90611c2d565b80601f016020809104026020016040519081016040528092919081815260200182805461048990611c2d565b80156104d65780601f106104ab576101008083540402835291602001916104d6565b820191906000526020600020905b8154815290600101906020018083116104b957829003601f168201915b50505050508060200190518101906104ee9190611d45565b60408051338152855160208083019190915286015151518183015290519192507f0d0c50c34bf538d7a3a69bc85bb10bcfe23f8f46c119741a7807a8319a6ae248919081900360600190a16105453415601d611150565b60208381015151516040519081527fd0cadb477e6d079b8ef830b39c6aebf21c933e1825db08ada0e486e36deb81f2910160405180910390a16020838101805151518483015233600090815260049092526040909120805460ff191660019081178255915151519101556105b761163e565b815181516001600160a01b0391821690526020808401518351921691015260408083015182519091015260608083015182519091015260808201516105fe90600190611df9565b602080830180519290925281514391015260a083015181516040015260c083015190516060015261062e81611176565b50505050565b610644600b60005414601b611150565b815161065f90158061065857508251600154145b601c611150565b60008080556002805461067190611c2d565b80601f016020809104026020016040519081016040528092919081815260200182805461069d90611c2d565b80156106ea5780601f106106bf576101008083540402835291602001916106ea565b820191906000526020600020905b8154815290600101906020018083116106cd57829003601f168201915b50505050508060200190518101906107029190611e79565b6040805133815285516020808301919091528601515115158183015290519192507f4e3b66664dfaa8eec55d3e4b5320be5906866b0f0eff2c9c5b88206afe3bdf8d919081900360600190a161075a3415601a611150565b6040810151600161076a33610b13565b51600181111561077c5761077c6119a2565b14610788576000610796565b61079133610b13565b604001515b141561084057604051600181527f52f212e44ed85b62b74b80cf1df96d730ea2d783812db5f73554edcd67a7a5c79060200160405180910390a1600182526107dc611675565b815181516001600160a01b039182169052602080840151835192169181019190915260408084015183518201528183018051600090528051339301929092528151439101526060808401518251909101526080808401519151015261062e81611285565b604051600081527f1fa9d6fd27f5621b5a60cc5058fea2575abb1f764de5f73e2eee28b35d8040489060200160405180910390a160008252610880611675565b815181516001600160a01b039182169052602080840151835190831690820152604080850151845182015281840180516001905285518151941693909201929092528051439201919091526060808401518251909101526080808401519151015261062e81611285565b505050565b6108ff600160005414600b611150565b815161091a90158061091357508251600154145b600c611150565b60008080556002805461092c90611c2d565b80601f016020809104026020016040519081016040528092919081815260200182805461095890611c2d565b80156109a55780601f1061097a576101008083540402835291602001916109a5565b820191906000526020600020905b81548152906001019060200180831161098857829003601f168201915b50505050508060200190518101906109bd9190611eff565b90506109c76116a5565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133856040516109f8929190611f1b565b60405180910390a1610a0c34156008611150565b60808201515151610a1f90600190611df9565b815152608082018051516020908101518351909101528051516040908101518351901515910152518151610a56919060009061135c565b8160200181905250610a78610a7133846020015160016113d0565b6009611150565b8151610a90906001600160a01b03163314600a611150565b610a986116d5565b82516001600160a01b03908116825260208085015190911681830152604080850151818401526060808601519084015283820151608084015260026000554360015551610ae791839101611f97565b60405160208183030381529060405260029080519060200190610b0b929190611716565b505050505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610b5f57610b5f6119a2565b1415610bd6576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610ba057610ba06119a2565b6001811115610bb157610bb16119a2565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b610bf5600260005414600f611150565b8151610c10901580610c0957508251600154145b6010611150565b600080805560028054610c2290611c2d565b80601f0160208091040260200160405190810160405280929190818152602001828054610c4e90611c2d565b8015610c9b5780601f10610c7057610100808354040283529160200191610c9b565b820191906000526020600020905b815481529060010190602001808311610c7e57829003601f168201915b5050505050806020019051810190610cb39190611eff565b90507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d9503384604051610ce6929190611f1b565b60405180910390a1610cfa3415600d611150565b8051610d12906001600160a01b03163314600e611150565b610d1a61163e565b815181516001600160a01b039182169052602080840151835192169181019190915260408084015183518201526060808501518451820152828401805160009081905281514395019490945260808601518151909301929092529051015261062e81611176565b610d916006600054146018611150565b8151610dac901580610da557508251600154145b6019611150565b600080805560028054610dbe90611c2d565b80601f0160208091040260200160405190810160405280929190818152602001828054610dea90611c2d565b8015610e375780601f10610e0c57610100808354040283529160200191610e37565b820191906000526020600020905b815481529060010190602001808311610e1a57829003601f168201915b5050505050806020019051810190610e4f9190611fe5565b90507fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae3384604051610e82929190611f1b565b60405180910390a1610e9634156016611150565b8051610eae906001600160a01b031633146017611150565b60608101515151600111610ed057610ed08160200151826040015160016113e8565b608081015115610f2e57805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610f17573d6000803e3d6000fd5b50600080805560018190556108ea9060029061179a565b600080805560018190556108ea9060029061179a565b610f546004600054146014611150565b8151610f6f901580610f6857508251600154145b6015611150565b600080805560028054610f8190611c2d565b80601f0160208091040260200160405190810160405280929190818152602001828054610fad90611c2d565b8015610ffa5780601f10610fcf57610100808354040283529160200191610ffa565b820191906000526020600020905b815481529060010190602001808311610fdd57829003601f168201915b50505050508060200190518101906110129190611e79565b604080513381528551602080830191909152808701518051838501520151606082015290519192507fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a919081900360800190a161107134156011611150565b8051611089906001600160a01b031633146012611150565b6020808401518051908201516040516110d7936110b193929101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8260400151146013611150565b6110df611675565b815181516001600160a01b03918216905260208084015183519083169082015285810151810151835160409081019190915281840180516001905285518151941693909201929092528051439201919091526060808401518251909101526080808401519151015261062e81611285565b816102005760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b805160400151602082015151101561121e576111906117d4565b8151516001600160a01b0390811682528251602090810151909116818301528251604090810151818401528351606090810151818501528285018051516080860152805183015160a086015251015160c0840152600c60005543600155516111fa91839101612056565b604051602081830303815290604052600290805190602001906108ea929190611716565b611226611829565b8151516001600160a01b039081168252825160209081015190911681830152825160609081015160408085019190915282850180518201518386015251909101516080840152600460005543600155516111fa918391016120ff565b50565b602081015151156112f357611298611829565b8151516001600160a01b0390811682528251602090810151909116818301528251604090810151818401528184018051606090810151908501525160809081015190840152600b60005543600155516111fa918391016120ff565b6112fb611863565b8151516001600160a01b0390811682528251602090810151821681840152808401805182015190921660408085019190915282516060908101519085015291516080908101519084015260066000554360015590516111fa9183910161210d565b611364611888565b60005b60018110156113b05784816001811061138257611382611f43565b602002015182826001811061139957611399611f43565b6020020152806113a88161215d565b915050611367565b50818184600181106113c4576113c4611f43565b60200201529392505050565b60006113de838530856113fc565b90505b9392505050565b6113f38383836114d6565b6108ea57600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161146391612178565b60006040518083038185875af1925050503d80600081146114a0576040519150601f19603f3d011682016040523d82523d6000602084013e6114a5565b606091505b50915091506114b6828260016115a7565b50808060200190518101906114cb9190612194565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161153591612178565b60006040518083038185875af1925050503d8060008114611572576040519150601f19603f3d011682016040523d82523d6000602084013e611577565b606091505b5091509150611588828260026115a7565b508080602001905181019061159d9190612194565b9695505050505050565b606083156115b65750816113e1565b8251156115c65782518084602001fd5b60405163100960cb60e01b81526004810183905260240161116d565b60405180604001604052806000815260200161160c60405180602001604052806000151581525090565b905290565b60405180604001604052806000815260200161160c60408051808201909152600060208201908152815290565b6040805160c0810182526000918101828152606082018390526080820183905260a08201929092529081526020810161160c6118d3565b6040805160a08101825260009181018281526060820183905260808201929092529081526020810161160c6118f4565b6040805160a08101825260009181018281526060820183905260808201929092529081526020810161160c611888565b6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200161160c611888565b82805461172290611c2d565b90600052602060002090601f016020900481019282611744576000855561178a565b82601f1061175d57805160ff191683800117855561178a565b8280016001018555821561178a579182015b8281111561178a57825182559160200191906001019061176f565b50611796929150611927565b5090565b5080546117a690611c2d565b6000825580601f106117b6575050565b601f0160209004906000526020600020908101906112829190611927565b6040518060e0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200161181c611888565b8152602001600081525090565b6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200161181c611888565b6040805160a081018252600080825260208201819052918101919091526060810161181c5b60405180602001604052806001905b6118bd604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816118975790505090565b6040518060800160405280600081526020016000815260200161181c611888565b6040518060a0016040528060001515815260200160006001600160a01b031681526020016000815260200161181c611888565b5b808211156117965760008155600101611928565b60006040828403121561194e57600080fd5b50919050565b60006040828403121561196657600080fd5b6113e1838361193c565b6001600160a01b038116811461128257600080fd5b60006020828403121561199757600080fd5b81356113e181611970565b634e487b7160e01b600052602160045260246000fd5b81516060820190600281106119dd57634e487b7160e01b600052602160045260246000fd5b808352506020830151151560208301526040830151604083015292915050565b60005b83811015611a18578181015183820152602001611a00565b8381111561062e5750506000910152565b8281526040602082015260008251806040840152611a4e8160608501602087016119fd565b601f01601f1916919091016060019392505050565b600060208284031215611a7557600080fd5b5035919050565b60006060828403121561194e57600080fd5b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715611ac757611ac7611a8e565b60405290565b6040516020810167ffffffffffffffff81118282101715611ac757611ac7611a8e565b6040516060810167ffffffffffffffff81118282101715611ac757611ac7611a8e565b60405160a0810167ffffffffffffffff81118282101715611ac757611ac7611a8e565b60008183036040811215611b4957600080fd5b611b51611aa4565b833581526020601f1983011215611b6757600080fd5b611b6f611acd565b9150611b79611acd565b602094850135815282529283015250919050565b801515811461128257600080fd5b600060408284031215611bad57600080fd5b611bb5611aa4565b823581526020830135611bc781611b8d565b60208201529392505050565b60008183036040811215611be657600080fd5b611bee611aa4565b833581526020601f1983011215611c0457600080fd5b611c0c611acd565b91506020840135611c1c81611b8d565b825260208101919091529392505050565b600181811c90821680611c4157607f821691505b6020821081141561194e57634e487b7160e01b600052602260045260246000fd5b60008183036060811215611c7557600080fd5b611c7d611aa4565b833581526040601f1983011215611c9357600080fd5b611c9b611aa4565b60208581013582526040909501358582015293810193909352509092915050565b600082601f830112611ccd57600080fd5b611cd5611acd565b80606080850186811115611ce857600080fd5b855b81811015611d3957828189031215611d025760008081fd5b611d0a611af0565b8151815260208083015181830152604080840151611d2781611b8d565b90830152908652909401938201611cea565b50919695505050505050565b60006101208284031215611d5857600080fd5b60405160e0810181811067ffffffffffffffff82111715611d7b57611d7b611a8e565b6040528251611d8981611970565b81526020830151611d9981611970565b80602083015250604083015160408201526060830151606082015260808301516080820152611dcb8460a08501611cbc565b60a0820152610100929092015160c083015250919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115611e0c57611e0c611de3565b500190565b600060e08284031215611e2357600080fd5b611e2b611b13565b90508151611e3881611970565b81526020820151611e4881611970565b602082015260408281015190820152611e648360608401611cbc565b606082015260c0820151608082015292915050565b600060e08284031215611e8b57600080fd5b6113e18383611e11565b600060e08284031215611ea757600080fd5b611eaf611b13565b90508151611ebc81611970565b81526020820151611ecc81611970565b806020830152506040820151604082015260608201516060820152611ef48360808401611cbc565b608082015292915050565b600060e08284031215611f1157600080fd5b6113e18383611e95565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b634e487b7160e01b600052603260045260246000fd5b8060005b600181101561062e578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101611f5d565b81516001600160a01b03908116825260208084015190911690820152604080830151908201526060808301519082015260808083015160e0830191611fde90840182611f59565b5092915050565b600060e08284031215611ff757600080fd5b611fff611b13565b825161200a81611970565b8152602083015161201a81611970565b6020820152604083015161202d81611970565b604082015261203f8460608501611cbc565b606082015260c09290920151608083015250919050565b60006101208201905060018060a01b038084511683528060208501511660208401525060408301516040830152606083015160608301526080830151608083015260a08301516120a960a0840182611f59565b5060c083015161010083015292915050565b60018060a01b03808251168352806020830151166020840152506040810151604083015260608101516120f16060840182611f59565b506080015160c09190910152565b60e0810161028e82846120bb565b81516001600160a01b0390811682526020808401518216908301526040808401519091169082015260608083015160e083019161214c90840182611f59565b50608083015160c083015292915050565b600060001982141561217157612171611de3565b5060010190565b6000825161218a8184602087016119fd565b9190910192915050565b6000602082840312156121a657600080fd5b81516113e181611b8d56fea264697066735822122001e75ab111ea98eda1da222eed8bb6a077dd2e6701042d9505d7875d1bcb99a664736f6c634300080c0033`,
  BytecodeLen: 10171,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:45:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:48:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:80:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:104:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:121:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:121:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:121:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:121:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:87:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: './index.rsh:57:17:after expr stmt semicolon',
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
