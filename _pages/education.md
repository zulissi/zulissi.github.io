---
layout: page
permalink: /education/
title: education
description: Interactive tools, hands-on tutorials, open-source models, and university courses.
nav: true
nav_order: 6
---

## Interactive Demos & Simulators

<div class="row mt-3">
  <div class="col-sm-12 mb-3">
    <div class="card p-3 shadow-sm border">
      <h4 class="card-title"><a href="https://aidemos.atmeta.com/uma" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-flask-vial"></i> UMA Playground</a></h4>
      <p class="card-text text-muted mb-2">Interactive browser-based simulation demo from Meta AI</p>
      <p class="card-text">
        The <strong>UMA Playground</strong> allows researchers, students, and practitioners to interactively explore simulations with the <strong>Universal Model for Atoms (UMA)</strong> directly in the browser with zero installation. You can test diverse chemical systems spanning catalysis, inorganic materials, and molecules, run real-time structural relaxations, and visualize atomic trajectories.
      </p>
      <a href="https://aidemos.atmeta.com/uma" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-primary align-self-start"><i class="fa-solid fa-arrow-up-right-from-square"></i> Open UMA Playground</a>
    </div>
  </div>

  <div class="col-sm-12 mb-3">
    <div class="card p-3 shadow-sm border">
      <h4 class="card-title"><a href="https://huggingface.co/spaces/facebook/fairchem_uma_demo" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github-alt"></i> FAIRChem UMA Demo (Hugging Face Space)</a></h4>
      <p class="card-text text-muted mb-2">Technical cloud demo for custom atomic structure simulations</p>
      <p class="card-text">
        Hosted on Hugging Face Spaces, this app enables users to upload custom atomic structure files (e.g. <code>.cif</code>, <code>.xyz</code>, <code>.pdb</code>) and configure simulation parameters such as temperature, charge, and simulation steps. It runs geometry optimizations and molecular dynamics (MD) trajectories in the cloud powered by UMA foundation models.
      </p>
      <a href="https://huggingface.co/spaces/facebook/fairchem_uma_demo" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-primary align-self-start"><i class="fa-solid fa-arrow-up-right-from-square"></i> Open Hugging Face Demo</a>
    </div>
  </div>
</div>

---

## FAIRChem Tutorials & Open Source

The **[FAIRChem (Meta FAIR Chemistry)](https://github.com/facebookresearch/fairchem)** repository contains open-source implementations, trained model checkpoints, and comprehensive educational tutorials for machine learning in chemistry and materials science:

- **[FAIRChem GitHub Repository](https://github.com/facebookresearch/fairchem)**: Core library housing architectures (UMA, EquiformerV2, GemNet, PaiNN, DimeNet++), data loaders, and training pipelines.
- **ASE (Atomic Simulation Environment) Integration**: Hands-on guides showing how to use UMA and Open Catalyst models as drop-in ASE calculators for structure optimization, equation-of-state calculations, and transition state searches.
- **Molecular Dynamics (MD) Tutorials**: Jupyter notebooks detailing how to set up, execute, and analyze NVE/NVT molecular dynamics simulations across diverse material and molecular systems.
- **Model Fine-Tuning & Custom Potentials**: Step-by-step instructions on fine-tuning pretrained foundation models on bespoke DFT datasets, specific reaction pathways, and local cluster environments.
- **Open Datasets**: Guides for downloading, preprocessing, and benchmarking with large-scale datasets including Open Catalyst (OC20, OC22, OC25), Open Materials 2024 (OMat24), Open Molecules 2025 (OMol25), Open Molecular Crystals (OMC25), and Open DAC (2023, 2025).

---

## University Courses (Carnegie Mellon University)

During my faculty appointment at CMU, I developed and taught undergraduate and graduate courses in chemical engineering, computational modeling, and machine learning:

- **Mathematical Methods for Chemical Engineers (06-262)**: Core course for sophomore undergraduate students covering linear algebra, differential equations, optimization, and analytical problem-solving in chemical systems.
  - [Course GitHub Repository & Notes](https://github.com/ulissigroup/math-methods-chemical-engineering)
  - [Course Website](https://ulissigroup.cheme.cmu.edu/math-methods-chemical-engineering/intro.html)
- **Numerical Methods and Machine Learning for Chemical Engineers (06-325)**: Required junior-level undergraduate course bridging scientific Python, numerical methods, optimization, and foundational machine learning techniques applied to chemical engineering problems.
  - [Course GitHub Repository & Notes](https://github.com/ulissigroup/F22-06-325)
  - [Course Website](https://ulissigroup.cheme.cmu.edu/F22-06-325/intro.html)
- **Chemical and Reactive Systems (06-625)**: Graduate-level course on chemical reaction engineering, transport phenomena, heterogeneous catalysis kinetics, and advanced numerical modeling for MS and PhD students.
