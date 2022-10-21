import itemController from './item.controller.js'
import {Router} from 'express'
import { get } from 'mongoose'
import { deleteOne, getMany, getOne, updateOne } from '../crud.js'

const router = Router()

router.route('/')
    .get(itemController.getMany)
    .post(itemController.createOne)

router.route('/:id')
    .get(itemController.getOne)
    .put(itemController.updateOne)
    .delete(itemController.deleteOne)

export default router

