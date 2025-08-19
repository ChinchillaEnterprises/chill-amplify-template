'use client';

import { useState, useEffect } from 'react';
import { getAmplifyStatus } from '@/lib/amplify-config';

/**
 * Banner component that displays when the app is running in mock mode
 * Provides clear instructions for deploying the backend
 */
export function MockModeBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const status = getAmplifyStatus();
    setIsVisible(status.isMock);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-b border-yellow-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-2xl" role="img" aria-label="Theater masks">
                🎭
              </span>
              <div>
                <p className="text-sm font-medium text-yellow-900">
                  Mock Mode Active - UI Preview Only
                </p>
                <p className="text-xs text-yellow-700 mt-0.5">
                  Backend features will be available after deployment
                </p>
              </div>
            </div>
            
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-sm text-yellow-600 hover:text-yellow-800 font-medium px-3 py-1 rounded-md hover:bg-yellow-100 transition-colors"
              aria-label={isExpanded ? "Hide details" : "Show details"}
            >
              {isExpanded ? 'Hide' : 'Learn More'} →
            </button>
          </div>
          
          {isExpanded && (
            <div className="mt-4 p-4 bg-white/70 rounded-lg border border-yellow-200">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">
                🚀 Quick Start: Enable Backend Features
              </h4>
              <ol className="text-sm text-gray-700 space-y-2">
                <li className="flex">
                  <span className="font-medium mr-2">1.</span>
                  <div>
                    <span>Open your terminal in the project root</span>
                  </div>
                </li>
                <li className="flex">
                  <span className="font-medium mr-2">2.</span>
                  <div>
                    <span>Run the sandbox deployment command:</span>
                    <code className="block mt-1 px-3 py-2 bg-gray-900 text-green-400 rounded font-mono text-xs">
                      npx ampx sandbox
                    </code>
                  </div>
                </li>
                <li className="flex">
                  <span className="font-medium mr-2">3.</span>
                  <div>
                    <span>Wait for deployment (~2-3 minutes)</span>
                  </div>
                </li>
                <li className="flex">
                  <span className="font-medium mr-2">4.</span>
                  <div>
                    <span>Refresh this page to see your app connected!</span>
                  </div>
                </li>
              </ol>
              <p className="text-xs text-gray-500 mt-3">
                💡 <strong>Tip:</strong> Keep the sandbox running during development for hot-reloading backend changes.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}