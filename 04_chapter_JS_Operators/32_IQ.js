let responseTime = 850;
let sla = 1000;

let slaStatus = responseTime <= sla ? "Within SLA" : "SLA Breached"

console.log(`Response: ${responseTime}ms - ${slaStatus}`);

console.log(`What is the SLA time ? - ${sla} ms` )