import React from 'react'


export default function Footer(){
return (
<footer className="footer">
<div style={{maxWidth:1200, margin:'0 auto', display:'flex', gap:24, flexWrap:'wrap', justifyContent:'space-between'}}>
<div>
<strong>PerfumeCo</strong>
<p>Premium fragrances & beauty products</p>
</div>
<div>
<div><a href="#">About Us</a></div>
<div><a href="#">Contact</a></div>
<div><a href="#">Privacy Policy</a></div>
</div>
<div>
<div>© {new Date().getFullYear()} PerfumeCo</div>
</div>
</div>
</footer>
)
}