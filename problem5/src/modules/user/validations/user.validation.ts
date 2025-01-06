
import * as Joi from 'joi';

export const getUsers = {
  query: Joi.object().keys({
    page: Joi.string().optional().pattern(/^[0-9]+$/),
    perPage: Joi.string().optional().pattern(/^[0-9]+$/),
    search: Joi.string().min(3).optional(),
  }),
};

export const createUser = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    name: Joi.string().required(),
  }),
};

export const updateUser = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
  body: Joi.object().keys({
    email: Joi.string().optional().email(),
    name: Joi.string().optional(),
  }),
};

export const getUser = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

export const deleteUser = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};