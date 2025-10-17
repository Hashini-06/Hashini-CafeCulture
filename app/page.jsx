export default function Home() {
  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        minHeight: '80vh',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <h1 style={{ color: 'darkmagenta', fontSize: '36px' }}>
        Cafe Culture Welcomes You!!!!
      </h1>
      <h2 style={{ color: 'darkmagenta', marginBottom: '25px' }}>Have A Sipp!!!</h2>
      <img src="/assests/Home.jpg" alt="Home" 
        style={{ width: '320px', borderRadius: '15px', boxShadow: '0 4px 10px rgba(0,0,0,0.3)', marginBottom: '20px' }}
      />
      <p style={{ color: 'blue', fontSize: '18px', maxWidth: '600px', margin: 'auto', lineHeight: '1.6' }}>
        "Some days make the coffee, other days the coffee makes you”
      </p>
      <p style={{ color: 'blue', fontSize: '18px', maxWidth: '600px', margin: 'auto', lineHeight: '1.6' }}>
        "Follow your heart, but take coffee with you”
      </p>
      <p
        style={{
          marginTop: '15px',
          fontStyle: 'italic',
          color: 'blue',
          fontWeight: '500',
        }}
      >
        “You're only one sip away from a good mood”
      </p>
    </div>
  );
}
