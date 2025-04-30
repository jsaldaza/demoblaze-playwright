import fs from 'fs';

type PlaywrightReport = {
  suites: {
    specs: {
      title: string;
      ok: boolean;
    }[];
  }[];
};

const report: PlaywrightReport = JSON.parse(fs.readFileSync('playwright-report.json', 'utf-8'));

const summary = report.suites.flatMap(suite =>
  suite.specs.map(spec => ({
    caseId: spec.title.match(/C(\d+)/)?.[0] ?? 'N/A',
    title: spec.title,
    status: spec.ok ? 'PASSED' : 'FAILED'
  }))
);

fs.writeFileSync('simulated-upload.json', JSON.stringify(summary, null, 2));
console.log('✅ Resultados simulados exportados a simulated-upload.json');
