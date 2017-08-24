# encoding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "materialize-jekyll"
  spec.version       = "0.4.0"
  spec.authors       = ["Victor Presumido"]
  spec.email         = ["victor.presumido@gmail.com"]

  spec.summary       = %q{A material design Jekyll theme for blog using MaterializeCSS.}
  spec.homepage      = "https://github.com/victorpre/materialize-jekyll"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets|_layouts|_includes|_sass|LICENSE|README)}i) }

  spec.add_runtime_dependency "jekyll", "~> 3.5"

  spec.add_development_dependency "jekyll", "~> 3.3"
  spec.add_development_dependency "bundler", "~> 1.12"
  spec.add_development_dependency "rake", "~> 10.0"
end
