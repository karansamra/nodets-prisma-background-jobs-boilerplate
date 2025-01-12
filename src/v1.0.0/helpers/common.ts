export const responseStatusCodes = {
  ok: 200,
  created: 201,
  accepted: 202,
  noContent: 204,
  badRequest: 400,
  unauthorized: 401,
  paymentRequired: 402,
  forbidden: 403,
  notFound: 404,
  methodNotAllowed: 405,
  validationError: 422,
  internalServerError: 500,
};

export const response = {
  statuses: {
    success: 'success',
    error: 'error',
  },
  create(
    res: any,
    status: string,
    data: any,
    message: string = '',
    code: number = responseStatusCodes.ok,
    technicalDetails: any = {}
  ) {
    if (code) {
      res.status(code);
    }
    return res.json({ status, data, message, technicalDetails });
  },
};
