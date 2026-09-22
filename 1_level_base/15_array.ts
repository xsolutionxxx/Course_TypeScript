
const departments: string[] = ['development', 'marketing', 'design'];

const department = departments[0];

departments.push('sales');

const report = departments.filter((d: string) => d !== 'development')/* .map((d: string) => (4)) */.map((d) => `${d} - done`);

const nums: number[][] = [[10], [20, 30], [40], [50]];

const [first] = report;
console.log(first);