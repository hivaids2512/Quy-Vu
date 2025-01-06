import express from 'express';
import * as userController from './user.controller';
import { validate } from '../../middlewares/validator';
import * as userValidation from './validations';

const router = express.Router();

router
  .route('/')
  .post(validate(userValidation.createUser), userController.createUser)
  .get(validate(userValidation.getUsers), userController.getUsers);

router
  .route('/:id')
  .get(validate(userValidation.getUser), userController.getUser)
  .put(validate(userValidation.updateUser), userController.updateUser)
  .delete( validate(userValidation.deleteUser), userController.deleteUser);

export default router;