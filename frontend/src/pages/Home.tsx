import { useEffect, useState } from 'react';
import { api } from '../lib/api';

function Home() {
  const [healthStatus, setHealthStatus] = useState<{ status?: string; timestamp?: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await api.get('/health');
        setHealthStatus(response.data);
        setError(null);
      } catch (err) {
        setError('Failed to connect to backend API');
        console.error('Health check error:', err);
      } finally {
        setLoading(false);
      }
    };

    checkHealth();
  }, []);

  return (
    <div>
      <h1>Welcome to React + Node + TypeScript App</h1>
      <p>This is a production-ready full-stack application.</p>

      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        <h2>Backend API Status</h2>
        {loading && <p>Checking backend connection...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {healthStatus && (
          <div>
            <p>
              <strong>Status:</strong> {healthStatus.status}
            </p>
            {healthStatus.timestamp && (
              <p>
                <strong>Timestamp:</strong> {new Date(healthStatus.timestamp).toLocaleString()}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
