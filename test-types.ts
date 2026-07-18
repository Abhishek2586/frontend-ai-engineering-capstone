import { UIMessage } from 'ai';

const msg: UIMessage = {
  id: '1',
  role: 'user',
  parts: [{ type: 'text', text: 'hello' }]
};

console.log(msg);
