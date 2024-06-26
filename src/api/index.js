import { Router } from 'express'
import UsersController from './Users'
import FileController from './File'
import ConfigController from './Config'
import CommonController from './Common'
import YonghuController from './Yonghu'
import ShangjiaController from './Shangjia'
import CanpinfenleiController from './Canpinfenlei'
import CanpinxinxiController from './Canpinxinxi'
import GonggaoxinxiController from './Gonggaoxinxi'
import CartController from './Cart'
import OrdersController from './Orders'
import AddressController from './Address'
import StoreupController from './Storeup'
import DiscusscanpinxinxiController from './Discusscanpinxinxi'

export default ({ config, db }) => {
	let api = Router()

	api.use('/users', UsersController({ config, db }))

	api.use('/file', FileController({ config, db }))

	api.use('/config', ConfigController({ config, db }))

	api.use('/', CommonController({ config, db }))

	api.use('/yonghu', YonghuController({ config, db }))

	api.use('/shangjia', ShangjiaController({ config, db }))

	api.use('/canpinfenlei', CanpinfenleiController({ config, db }))

	api.use('/canpinxinxi', CanpinxinxiController({ config, db }))

	api.use('/gonggaoxinxi', GonggaoxinxiController({ config, db }))

	api.use('/cart', CartController({ config, db }))

	api.use('/orders', OrdersController({ config, db }))

	api.use('/address', AddressController({ config, db }))

	api.use('/storeup', StoreupController({ config, db }))

	api.use('/discusscanpinxinxi', DiscusscanpinxinxiController({ config, db }))

	return api
}
