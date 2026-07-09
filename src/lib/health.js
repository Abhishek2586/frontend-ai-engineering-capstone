export function getHealthData() {
  return {
    status: 'healthy',
    appName: process.env.NEXT_PUBLIC_APP_NAME || 'Frontend AI Capstone',
    environment: process.env.NEXT_PUBLIC_APP_ENV || 'local',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
  };
}
