import assert from 'node:assert/strict';
import {rates,estimateCost,personas,evidence,photos} from '../src/data.js';
assert.deepEqual(estimateCost(9200,7),{rental:64400,extra:0,gst:11592,total:75992});
assert.deepEqual(estimateCost(5600,1,true),{rental:5600,extra:300,gst:1062,total:6962});
for(const days of [0,-1,1.5,31,NaN]) assert.equal(estimateCost(9200,days),null);
assert.equal(estimateCost(5600,30).total,198240);
assert.equal(rates.length,10);
assert.equal(personas.length,5);
assert.equal(new Set(photos.map(p=>p.id)).size,photos.length);
for(const row of rates) assert.ok(row.slice(1).every(n=>Number.isInteger(n)&&n>0));
for(const p of personas){assert.equal(p.journey.length,5);assert.ok(p.sources.every(id=>evidence.some(e=>e.id===id)));}
assert.ok(!personas.some(p=>p.sources.includes(14)));
assert.ok(!evidence.some(e=>e.id===5));
console.log('Passed: rental calculations, invalid inputs, persona source references and evidence exclusions.');
