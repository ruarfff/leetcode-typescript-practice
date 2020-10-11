export function removeDuplicateLetters(s: string): string {
  let characters = new Map();
  let out = '';
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (characters.has(ch)) {
      characters.set(ch, { count: characters.get(ch).count + 1, used: false });
    } else {
      characters.set(ch, { count: 1, used: false });
    }
  }

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    const current = characters.get(ch);
    current.count = current.count - 1;
    if (!current.used) {
      while (
        out.length > 0 &&
        out.charAt(out.length - 1) > ch &&
        characters.get(out.charAt(out.length - 1)).count > 0
      ) {
        characters.get(out.charAt(out.length - 1)).used = false;
        out = out.slice(0, -1);
      }
      out += ch;
      characters.get(out.charAt(out.length - 1)).used = true;
    }
  }

  return out;
}
