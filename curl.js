import fetch from 'node-fetch';
import done from './done.js';

async function curl(url) {
  const res = await fetch(url);
  const json = await res.text();
  done(json);
}

export default curl;
