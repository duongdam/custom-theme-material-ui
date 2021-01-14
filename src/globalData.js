import {setGlobal} from 'reactn'
import ls from 'local-storage'

const colors = ls.get('colors') || {primary: '#1790FF', secondary: '#0029FF'}

setGlobal({
  colors: colors
});
