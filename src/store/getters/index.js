/**
 * Created by xuyingchuan on 2018/12/3.
 */

import app from './app'
import errorLog from './errorLog'
import permission from './permission'
import tagsView from './tagsView'
import user from './user'
export const getters = Object.assign({},
  app,
  errorLog,
  permission,
  tagsView,
  user
)
