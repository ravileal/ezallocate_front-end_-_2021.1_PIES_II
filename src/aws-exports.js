export default {
  aws_project_region: 'us-east-1',
  aws_cognito_region: 'us-east-1',
  aws_user_pools_id: process.env.VUE_APP_COGNITO_USER_POOL_ID,
  aws_user_pools_web_client_id: process.env.VUE_APP_COGNITO_WEB_CLIENT_ID,
  oauth: {},
};
