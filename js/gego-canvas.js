/**
 * gego-canvas.js — Animated neural manifold background.
 *
 * Inspired by Gertrud Goldsmith (Gego): hanging sculptures made of fine wire
 * networks. Two overlapping node clusters mirror the CA1 deep/superficial
 * layer distinction from Julio's thesis (Neuron, 2025):
 *   - Cluster A (superficial): elliptical manifold, upper-right
 *   - Cluster B (deep):        circular manifold,  lower-right
 * A single thicker trajectory line through Cluster A evokes Gego's
 * "path through the network" motif.
 *
 * Respects prefers-reduced-motion: draws one static frame and stops.
 */

/** @typedef {{ x: number, y: number, baseX: number, baseY: number, cluster: 0|1, phase: number, speed: number }} Node */
/** @typedef {{ i: number, j: number, d: number, key: string, bridge?: boolean }} Edge */

const INK_BASE = 'rgba(26,26,26,';

/** @param {number} min @param {number} max */
const rand = (min, max) => min + Math.random() * (max - min);

/**
 * Build the node + edge graph.
 * @param {number} W canvas width
 * @param {number} H canvas height
 * @returns {{ nodes: Node[], edges: Edge[] }}
 */
function buildGraph(W, H) {
  const nodes = /** @type {Node[]} */ ([]);
  const edges = /** @type {Edge[]} */ ([]);

  // Cluster layout — pushed right so the network sits behind the text column
  const clusterA = { x: W * 0.74, y: H * 0.38, rx: W * 0.18, ry: H * 0.28 };
  const clusterB = { x: W * 0.82, y: H * 0.62, rx: W * 0.13, ry: H * 0.22 };
  const countA = 28;
  const countB = 22;

  const addCluster = (count, cluster, cx, cy, rx, ry, angleNoise) => {
    for (let i = 0; i < count; i++) {
      const angle  = (i / count) * Math.PI * 2 + rand(0, angleNoise);
      const radius = rand(0.65, 1.0);
      const x = cx + Math.cos(angle) * rx * radius;
      const y = cy + Math.sin(angle) * ry * radius;
      nodes.push({ x, y, baseX: x, baseY: y, cluster, phase: rand(0, Math.PI * 2), speed: rand(0.0002, 0.0007) });
    }
  };

  addCluster(countA, 0, clusterA.x, clusterA.y, clusterA.rx, clusterA.ry, 0.3);
  addCluster(countB, 1, clusterB.x, clusterB.y, clusterB.rx, clusterB.ry, 0.4);

  // k-NN edges (k=4) — mirrors the Structure Index graph construction
  const K = 4;
  const edgeSet = new Set();

  for (let i = 0; i < nodes.length; i++) {
    const sorted = nodes
      .map((n, j) => ({ j, d: Math.hypot(nodes[i].baseX - n.baseX, nodes[i].baseY - n.baseY) }))
      .filter(({ j }) => j !== i)
      .sort((a, b) => a.d - b.d);

    for (let m = 0; m < K; m++) {
      const { j, d } = sorted[m];
      const key = `${Math.min(i, j)}-${Math.max(i, j)}`;
      if (!edgeSet.has(key)) {
        edgeSet.add(key);
        edges.push({ i, j, d, key });
      }
    }
  }

  // Bridge edges — long connections between clusters (Gego's suspended threads)
  edges.push({ i: 3,  j: countA + 5,  d: Infinity, key: 'bridge-0', bridge: true });
  edges.push({ i: 12, j: countA + 11, d: Infinity, key: 'bridge-1', bridge: true });

  return { nodes, edges };
}

/**
 * Animate nodes with per-node sinusoidal drift.
 * @param {Node[]} nodes
 * @param {number} t   timestamp from requestAnimationFrame
 */
function animateNodes(nodes, t) {
  const DRIFT = 12;
  nodes.forEach(n => {
    n.x = n.baseX + Math.sin(t * n.speed + n.phase) * DRIFT;
    n.y = n.baseY + Math.cos(t * n.speed * 0.7 + n.phase) * DRIFT * 0.6;
  });
}

/**
 * Draw one frame.
 * @param {CanvasRenderingContext2D} ctx
 * @param {Node[]} nodes
 * @param {Edge[]} edges
 * @param {number} W   CSS pixel width
 * @param {number} H   CSS pixel height
 * @param {number} scale  scroll-driven scale factor (1.0 at rest)
 */
function drawFrame(ctx, nodes, edges, W, H, scale = 1) {
  ctx.clearRect(0, 0, W, H);

  // Anchor expansion on the right side so the network grows toward center-left
  if (scale !== 1) {
    const ox = W * 0.88;
    const oy = H * 0.50;
    ctx.save();
    ctx.translate(ox, oy);
    ctx.scale(scale, scale);
    ctx.translate(-ox, -oy);
  }

  // Edges
  const MAX_DIST = 180;
  edges.forEach(({ i, j, bridge }) => {
    const a = nodes[i];
    const b = nodes[j];

    let opacity, lineWidth;
    if (bridge) {
      opacity   = 0.14;
      lineWidth = 0.8;
    } else {
      const dist = Math.hypot(b.x - a.x, b.y - a.y);
      const norm = Math.min(dist / MAX_DIST, 1);
      opacity   = (1 - norm) * 0.32 + 0.08;
      lineWidth = (1 - norm) * 1.4  + 0.5;
    }

    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.strokeStyle = INK_BASE + opacity + ')';
    ctx.lineWidth   = lineWidth;
    ctx.stroke();
  });

  // Nodes — small intersection dots, Gego-style
  nodes.forEach(n => {
    const isA    = n.cluster === 0;
    const radius  = isA ? 2.2 : 1.8;
    const opacity = isA ? 0.55 : 0.45;

    ctx.beginPath();
    ctx.arc(n.x, n.y, radius, 0, Math.PI * 2);
    ctx.fillStyle = INK_BASE + opacity + ')';
    ctx.fill();
  });

  // Trajectory spine — thicker curved path through Cluster A
  // Represents the dominant trajectory motif in Gego's work
  const pathIndices = [0, 4, 8, 12, 16, 20, 24].map(i => Math.min(i, nodes.length - 1));
  const pathNodes   = pathIndices.map(i => nodes[i]);

  if (pathNodes.length >= 2) {
    ctx.beginPath();
    ctx.moveTo(pathNodes[0].x, pathNodes[0].y);
    for (let p = 1; p < pathNodes.length - 1; p++) {
      const mx = (pathNodes[p].x + pathNodes[p + 1].x) / 2;
      const my = (pathNodes[p].y + pathNodes[p + 1].y) / 2;
      ctx.quadraticCurveTo(pathNodes[p].x, pathNodes[p].y, mx, my);
    }
    ctx.strokeStyle = INK_BASE + '0.38)';
    ctx.lineWidth   = 1.8;
    ctx.stroke();
  }

  if (scale !== 1) ctx.restore();
}

/** Current scroll progress [0–1], updated externally via setScrollProgress. */
let scrollProgress = 0;

/**
 * Set the scroll progress so the next animation frame scales the drawing.
 * Called by scroll-fx.js.
 * @param {number} p — clamped 0–1
 */
export function setScrollProgress(p) { scrollProgress = p; }

/**
 * Initialise and start the Gego canvas animation.
 * @param {HTMLCanvasElement} canvas
 */
export function initGegoCanvas(canvas) {
  const ctx = canvas.getContext('2d');
  let nodes = [], edges = [];
  let cssW = 0, cssH = 0;
  let rafId = null;

  const resize = () => {
    const dpr = window.devicePixelRatio || 1;
    cssW = canvas.offsetWidth;
    cssH = canvas.offsetHeight;
    canvas.width  = cssW * dpr;
    canvas.height = cssH * dpr;
    ctx.scale(dpr, dpr);
    ({ nodes, edges } = buildGraph(cssW, cssH));
  };

  resize();
  window.addEventListener('resize', resize);

  const loop = (t) => {
    animateNodes(nodes, t);
    drawFrame(ctx, nodes, edges, cssW, cssH, 1 + scrollProgress * 0.5);
    rafId = requestAnimationFrame(loop);
  };

  // Respect user's motion preferences
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    drawFrame(ctx, nodes, edges, cssW, cssH, 1);
    return; // static frame only
  }

  rafId = requestAnimationFrame(loop);

  // Expose a cleanup function for potential SPA teardown
  return () => {
    cancelAnimationFrame(rafId);
    window.removeEventListener('resize', resize);
  };
}
