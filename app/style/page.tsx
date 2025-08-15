import { Button } from "@/components/ui/primitives/Button";
import { Input } from "@/components/ui/primitives/Input";
import { Card, CardBody, CardFooter, CardHeader } from "@/components/ui/layout/Card";

export default function StyleShowcase() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 space-y-8">
      <section>
        <h1 className="text-3xl font-semibold text-app">Style Showcase</h1>
        <p className="text-appmuted">Preview of core surfaces and components.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 card-premium">
          <h2 className="text-xl font-medium text-app">Premium Card</h2>
          <p className="text-appmuted">Layered shadows, subtle gradient, inner sheen.</p>
        </div>
        <div className="p-6 btn-glass">
          <h2 className="text-xl font-medium text-app">Glass Surface</h2>
          <p className="text-appmuted">Frosted translucency with edge light.</p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-medium text-app">Buttons</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary (Metal)</Button>
          <Button variant="secondary">Secondary (Glass)</Button>
          <Button variant="danger">Danger (Metal)</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-medium text-app">Inputs</h3>
        <div className="grid gap-3 md:grid-cols-2">
          <Input label="Email" placeholder="you@example.com" helperText="We will never share your email." />
          <Input label="Search" placeholder="Search..." clearable />
        </div>
      </section>

      <section>
        <h3 className="text-lg font-medium text-app mb-3">Cards</h3>
        <Card className="depth-soft">
          <CardHeader>
            <div className="text-app font-medium">Stats</div>
          </CardHeader>
          <CardBody>
            <div className="text-appmuted">Elegant container using tokenized surfaces.</div>
          </CardBody>
          <CardFooter>
            <Button size="sm" variant="primary">Action</Button>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}
