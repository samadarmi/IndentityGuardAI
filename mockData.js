// DEMONSTRATION DATA ONLY. Not produced by any detection system.
export const matches=[
{id:'M-101',source:'photoshare.example',url:'https://photoshare.example/p/8812',found:'2026-11-02 09:14',face:92,image:76,category:'Near-duplicate',status:'New'},
{id:'M-102',source:'forum.example',url:'https://forum.example/t/5521',found:'2026-11-03 17:40',face:71,image:64,category:'Cropped reuse',status:'Under Review'},
{id:'M-103',source:'social.example',url:'https://social.example/u/anya',found:'2026-11-05 11:02',face:48,image:39,category:'Low similarity',status:'False Match'},
{id:'M-104',source:'blog.example',url:'https://blog.example/post/77',found:'2026-11-06 08:25',face:88,image:81,category:'Near-duplicate',status:'Possible Misuse'}];
export const risk={score:82,level:'HIGH',signals:[{k:'Facial Similarity',v:92,d:'Facial embedding closeness to your reference photo.'},{k:'Image Similarity',v:76,d:'Visual overlap after crop and resize normalisation.'},{k:'Contextual Mismatch',v:68,d:'Name or caption differs from the enrolled identity.'},{k:'Source Information',v:55,d:'Public page, low-reputation host.'},{k:'Review Status',v:40,d:'Awaiting human verification.'}]};
export const incidents=[
{id:'INC-0041',date:'2026-11-04 10:12',source:'photoshare.example',priority:'High',status:'Under Review',notes:'Profile uses my photo with another name.'},
{id:'INC-0040',date:'2026-10-28 15:30',source:'forum.example',priority:'Medium',status:'Possible Misuse',notes:''},
{id:'INC-0038',date:'2026-10-19 08:05',source:'blog.example',priority:'Low',status:'Authorized',notes:'Authorised repost.'}];
export const history=Array.from({length:14},(_,i)=>({id:`SCN-${2040-i}`,date:`2026-11-0${(i%9)+1}`,type:i%3?'Scheduled':'Manual',images:20+i*3,matches:(i*3)%7,status:i%5===0?'Failed':'Completed'}));
export const trend={labels:['Wk1','Wk2','Wk3','Wk4','Wk5','Wk6'],scans:[4,6,5,9,7,11],matches:[1,2,2,5,3,6],reviewed:[1,1,2,3,3,4]};
