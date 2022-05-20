function getCOSFormData(tokenRes, file) {
  const fd = new FormData();
  const { policy, signature, keyTime, secretId, key, expire } = tokenRes;
  fd.append('Expires', expire);
  fd.append('q-sign-algorithm', 'sha1');
  fd.append('q-ak', secretId);
  fd.append('q-key-time', keyTime);
  fd.append('q-signature', signature);
  fd.append('policy', policy);
  fd.append('key', key);
  fd.append('file', file);
  return fd;
}
export default getCOSFormData;
