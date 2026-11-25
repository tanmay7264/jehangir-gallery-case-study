import assert from 'node:assert/strict';
import {rates,estimateCost,personas,evidence,photos} from '../src/data.js';
import {ratingCounts,reviewSample,reviewInsights,benchmarks,teamMembers,visitorLenses} from '../src/global-data.js';
assert.deepEqual(estimateCost(9200,7),{rental:64400,extra:0,gst:11592,total:75992});
assert.deepEqual(estimateCost(5600,1,true),{rental:5600,extra:300,gst:1062,total:6962});
for(const days of [0,-1,1.5,31,NaN]) assert.equal(estimateCost(9200,days),null);
assert.equal(estimateCost(5600,30).total,198240);
assert.equal(rates.length,10);
assert.equal(rates[1][2],8400);
assert.equal(estimateCost(rates[1][2],7).total,69384);
assert.equal(personas.length,5);
assert.equal(new Set(photos.map(p=>p.id)).size,photos.length);
for(const row of rates) assert.ok(row.slice(1).every(n=>Number.isInteger(n)&&n>0));
for(const p of personas){assert.equal(p.journey.length,5);assert.ok(p.sources.every(id=>evidence.some(e=>e.id===id)));}
assert.ok(!personas.some(p=>p.sources.includes(14)));
assert.ok(!evidence.some(e=>e.id===5));
console.log('Passed: rental calculations, invalid inputs, persona source references and evidence exclusions.');
assert.equal(reviewSample.length,90);
assert.equal(new Set(reviewSample.map(r=>r.source)).size,90);
assert.deepEqual(ratingCounts('newest').map(r=>r.count),[42,15,2,0,1]);
assert.deepEqual(ratingCounts('lowest').map(r=>r.count),[0,0,0,0,30]);
assert.equal(reviewSample.filter(r=>r.batch==='newest'&&r.hasText).length,16);
for(const issue of reviewInsights){
 assert.ok(issue.reviews.every(id=>reviewSample.some(r=>r.id===id)));
 assert.ok(issue.personas.every(id=>personas.some(p=>p.id===id)));
 assert.ok(benchmarks.some(b=>b.id===issue.benchmark));
 assert.ok(!issue.reviews.includes('recent-17')&&!issue.reviews.includes('recent-28'));
}
assert.deepEqual(teamMembers.map(m=>[m.id,m.name]),[['4165','Aastha'],['4166','Omkar'],['4168','Tanmay'],['4170','Tanaya'],['4171','Riya'],['4174','Ojas']]);
for(const member of teamMembers){assert.ok(evidence.some(e=>e.id===member.transcript));assert.ok(reviewSample.some(r=>r.id===member.review));}
assert.equal(benchmarks.length,4);
assert.deepEqual(Object.keys(visitorLenses),personas.map(p=>p.id));
console.log('Passed: review sample totals, chart distributions, source mappings, exclusions, international references and team name/photo matches.');
