# MG1218 live demo: watching a digital twin expire

Notebook for the guest lecture *Shopfloor Digital Twin Generation, and how to keep it trustworthy*
(MG1218 Digital Factories, KTH, 17 November 2026).

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/gunnerwang/gunnerwang.github.io/blob/main/teaching/mg1218/MG1218_live_demo.ipynb)

It rebuilds the opening case of the lecture: a final-assembly line whose simulation model was about 2 % off in
month 1 and about 19 % off in month 6. In four steps (build, fail, use, maintain) it fits a twin from the first
week of logs, compares it with the floor, asks it a planning question, and keeps it valid with a CUSUM alarm,
recalibration and regeneration.

**Run it:** click the Colab badge (running needs a Google account; choose *File → Save a copy in Drive* to keep
your changes), or download the notebook and run it locally with Python 3, `numpy` and `matplotlib`.
It runs in a few seconds. Section 1 holds the settings; section 9 suggests experiments.

The line and its numbers are illustrative. Questions: Tianyu Wang, KTH Production Engineering.
