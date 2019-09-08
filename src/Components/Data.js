import React from 'react';
import namor from 'namor';

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  const statusChance = Math.random();
  const c1 = Math.floor(Math.random() * 215);
  const c2 = Math.floor(Math.random() * 215);
  const sum = c1 + c2;
 
  return {
    username: namor.generate({ words: 1, numbers: 0 }),
    rank: Math.floor(Math.random() * 300) + 1,
    c1: Math.floor(Math.random() * 215),
    c2: Math.floor(Math.random() * 215),
    total: sum,
  };
};

export function makeData(len = 5553) {
  return range(len).map(d => {
    return {
      ...newPerson(),
      children: range(10).map(newPerson)
    };
  });
}
