/**
 * Amplify configuration with mock mode detection
 * This file handles both mock mode (no AWS) and production mode (real AWS)
 */

import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';

/**
 * Detect if we're using mock or real AWS resources
 * Mock mode is identified by the presence of "mock_" prefixed resource IDs
 */
export const isMockMode = (): boolean => {
  return (
    outputs.auth?.user_pool_id === 'mock_user_pool' ||
    outputs.auth?.user_pool_client_id === 'mock_client_id' ||
    !outputs.auth?.user_pool_id?.includes('_')
  );
};

/**
 * Get the current Amplify mode status with detailed information
 */
export const getAmplifyStatus = () => {
  const mockMode = isMockMode();
  
  return {
    isMock: mockMode,
    mode: mockMode ? 'mock' : 'production',
    message: mockMode 
      ? '🎭 Running in Mock Mode - UI Preview Only'
      : '🚀 Connected to AWS Backend',
    instructions: mockMode
      ? 'Run `npx ampx sandbox` to deploy backend'
      : 'Backend is deployed and ready'
  };
};

/**
 * Configure Amplify based on the current mode
 * In mock mode, we skip configuration to avoid errors
 * In production mode, we configure with real AWS resources
 */
if (!isMockMode()) {
  try {
    Amplify.configure(outputs);
    console.log('✅ Amplify configured with AWS backend');
  } catch (error) {
    console.warn('⚠️ Failed to configure Amplify:', error);
  }
} else {
  console.log(
    '%c🎭 Mock Mode Active',
    'background: #fef3c7; color: #92400e; padding: 8px 12px; border-radius: 4px; font-weight: bold;'
  );
  console.log(
    '%cTo enable backend features, run: npx ampx sandbox',
    'color: #059669; font-family: monospace; padding: 4px 0;'
  );
}

export { outputs };