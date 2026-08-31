---
layout: page
permalink: /repositories/
title: repositories
nav: true
nav_order: 4
---

{% if site.data.repositories.github_users %}

## GitHub users

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}
</div>

---

{% if site.repo_trophies.enabled %}
{% for user in site.data.repositories.github_users %}
{% if site.data.repositories.github_users.size > 1 %}

  <h4>{{ user }}</h4>
  {% endif %}
  <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% include repository/repo_trophies.liquid username=user %}
  </div>

---

{% endfor %}
{% endif %}
{% endif %}

{% if site.data.repositories.github_repos %}

## GitHub Repositories

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}

---

## Community Software & Other OSS Contributions

<div class="row mt-3">
  <div class="col-md-6 mb-3">
    <div class="card h-100 p-3 shadow-sm border">
      <div class="card-body p-0 d-flex flex-column">
        <h5 class="card-title mb-1">
          <a href="https://gitlab.com/ase/ase" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-gitlab text-warning"></i> ASE (Atomic Simulation Environment)
          </a>
        </h5>
        <h6 class="card-subtitle text-muted mb-2">GitLab / Python</h6>
        <p class="card-text flex-grow-1" style="font-size: 0.9rem;">
          Core Python library for atomistic simulations, structure manipulation, calculators, and workflows across computational chemistry and materials science.
        </p>
        <a href="https://gitlab.com/ase/ase" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-primary align-self-start mt-2">
          <i class="fa-solid fa-arrow-up-right-from-square"></i> View on GitLab
        </a>
      </div>
    </div>
  </div>

  <div class="col-md-6 mb-3">
    <div class="card h-100 p-3 shadow-sm border">
      <div class="card-body p-0 d-flex flex-column">
        <h5 class="card-title mb-1">
          <a href="https://github.com/Quantum-Accelerators/quacc" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-github"></i> quacc (Quantum Accelerators)
          </a>
        </h5>
        <h6 class="card-subtitle text-muted mb-2">Quantum-Accelerators / Python</h6>
        <p class="card-text flex-grow-1" style="font-size: 0.9rem;">
          Platform for high-throughput computational materials science and quantum chemistry workflows, connecting modern calculators (including MLIPs) with workflow engines.
        </p>
        <a href="https://github.com/Quantum-Accelerators/quacc" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-primary align-self-start mt-2">
          <i class="fa-solid fa-arrow-up-right-from-square"></i> View on GitHub
        </a>
      </div>
    </div>
  </div>

  <div class="col-md-12 mb-3">
    <div class="card h-100 p-3 shadow-sm border">
      <div class="card-body p-0 d-flex flex-column">
        <h5 class="card-title mb-1">
          <a href="https://huggingface.co/spaces/facebook/fairchem_uma_demo/tree/main" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-github-alt"></i> FAIRChem UMA Interactive Demo Space
          </a>
        </h5>
        <h6 class="card-subtitle text-muted mb-2">Hugging Face Space Repository</h6>
        <p class="card-text flex-grow-1" style="font-size: 0.9rem;">
          Source code and cloud deployment for the interactive UMA web application. Supports uploading structure files (CIF, XYZ, PDB) and running live geometry optimizations and molecular dynamics.
        </p>
        <a href="https://huggingface.co/spaces/facebook/fairchem_uma_demo/tree/main" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-primary align-self-start mt-2">
          <i class="fa-solid fa-arrow-up-right-from-square"></i> View Repository on Hugging Face
        </a>
      </div>
    </div>
  </div>
</div>
