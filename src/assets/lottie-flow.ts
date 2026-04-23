// Custom Lottie animation: illustrates the Land in Main business model.
// An email leaves a sender, gets scanned by the auditor (47-pt scan ring),
// then lands in the "Primary Inbox" (instead of Spam).
// Frame rate: 60fps, duration: 6s (360 frames), 400x300 viewport.

const animation = {
  v: "5.7.4",
  fr: 60,
  ip: 0,
  op: 360,
  w: 400,
  h: 300,
  nm: "LandInMain",
  ddd: 0,
  assets: [],
  layers: [
    // ─── Background grid glow ───
    {
      ddd: 0, ind: 1, ty: 4, nm: "glow",
      sr: 1,
      ks: {
        o: { a: 1, k: [
          { t: 0, s: [20] },
          { t: 180, s: [40] },
          { t: 360, s: [20] },
        ]},
        p: { a: 0, k: [200, 150, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      shapes: [
        {
          ty: "gr",
          it: [
            { ty: "el", p: { a: 0, k: [0, 0] }, s: { a: 0, k: [380, 240] } },
            { ty: "fl", c: { a: 0, k: [1, 0.7, 0.25, 1] }, o: { a: 0, k: 100 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: 100 } },
          ],
        },
      ],
      ip: 0, op: 360, st: 0, bm: 0,
    },

    // ─── SENDER (left box) ───
    {
      ddd: 0, ind: 2, ty: 4, nm: "sender",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        p: { a: 0, k: [50, 150, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      shapes: [
        {
          ty: "gr",
          it: [
            { ty: "rc", p: { a: 0, k: [0, 0] }, s: { a: 0, k: [60, 60] }, r: { a: 0, k: 4 } },
            { ty: "st", c: { a: 0, k: [0.94, 0.88, 0.74, 0.9] }, o: { a: 0, k: 100 }, w: { a: 0, k: 1.5 } },
            { ty: "fl", c: { a: 0, k: [0.18, 0.29, 0.37, 1] }, o: { a: 0, k: 100 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: 100 } },
          ],
        },
      ],
      ip: 0, op: 360, st: 0, bm: 0,
    },

    // Sender label dots (server lights)
    {
      ddd: 0, ind: 3, ty: 4, nm: "sender-dot",
      sr: 1,
      ks: {
        o: { a: 1, k: [
          { t: 0, s: [40] }, { t: 30, s: [100] }, { t: 60, s: [40] },
          { t: 120, s: [100] }, { t: 150, s: [40] },
        ]},
        p: { a: 0, k: [50, 175, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      shapes: [
        {
          ty: "gr",
          it: [
            { ty: "el", p: { a: 0, k: [0, 0] }, s: { a: 0, k: [6, 6] } },
            { ty: "fl", c: { a: 0, k: [0.94, 0.56, 0.19, 1] }, o: { a: 0, k: 100 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: 100 } },
          ],
        },
      ],
      ip: 0, op: 360, st: 0, bm: 0,
    },

    // ─── EMAIL (envelope) traveling left → center → right ───
    {
      ddd: 0, ind: 4, ty: 4, nm: "envelope",
      sr: 1,
      ks: {
        o: { a: 1, k: [
          { t: 0, s: [0] },
          { t: 30, s: [100] },
          { t: 300, s: [100] },
          { t: 340, s: [100] },
        ]},
        r: { a: 1, k: [
          { t: 0, s: [-5] },
          { t: 180, s: [5] },
          { t: 360, s: [-5] },
        ]},
        p: { a: 1, k: [
          { t: 0, s: [85, 150, 0], to: [20, 0, 0], ti: [-20, 0, 0] },
          { t: 120, s: [200, 150, 0], to: [0, 0, 0], ti: [0, 0, 0] },
          { t: 240, s: [200, 150, 0], to: [20, 0, 0], ti: [-20, 0, 0] },
          { t: 340, s: [315, 150, 0] },
        ]},
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      shapes: [
        {
          ty: "gr",
          it: [
            // envelope body
            { ty: "rc", p: { a: 0, k: [0, 0] }, s: { a: 0, k: [44, 30] }, r: { a: 0, k: 2 } },
            { ty: "fl", c: { a: 0, k: [1, 0.95, 0.82, 1] }, o: { a: 0, k: 100 } },
            { ty: "st", c: { a: 0, k: [0.94, 0.56, 0.19, 1] }, o: { a: 0, k: 100 }, w: { a: 0, k: 1.5 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: 100 } },
          ],
        },
        {
          ty: "gr",
          it: [
            // envelope flap (V shape using path)
            { ty: "sh", ks: { a: 0, k: { i: [[0,0],[0,0],[0,0]], o: [[0,0],[0,0],[0,0]], v: [[-22,-15],[0,3],[22,-15]], c: false } } },
            { ty: "st", c: { a: 0, k: [0.94, 0.56, 0.19, 1] }, o: { a: 0, k: 100 }, w: { a: 0, k: 1.5 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: 100 } },
          ],
        },
      ],
      ip: 0, op: 360, st: 0, bm: 0,
    },

    // ─── SCANNER RING (center) — pulses while envelope is in middle ───
    {
      ddd: 0, ind: 5, ty: 4, nm: "scan-ring",
      sr: 1,
      ks: {
        o: { a: 1, k: [
          { t: 100, s: [0] },
          { t: 130, s: [80] },
          { t: 230, s: [80] },
          { t: 260, s: [0] },
        ]},
        p: { a: 0, k: [200, 150, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 1, k: [
          { t: 120, s: [60, 60, 100] },
          { t: 200, s: [120, 120, 100] },
          { t: 260, s: [60, 60, 100] },
        ]},
      },
      shapes: [
        {
          ty: "gr",
          it: [
            { ty: "el", p: { a: 0, k: [0, 0] }, s: { a: 0, k: [80, 80] } },
            { ty: "st", c: { a: 0, k: [0.94, 0.56, 0.19, 1] }, o: { a: 0, k: 100 }, w: { a: 0, k: 1.5 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: 100 } },
          ],
        },
      ],
      ip: 100, op: 270, st: 0, bm: 0,
    },

    // Inner scan ring 2
    {
      ddd: 0, ind: 6, ty: 4, nm: "scan-ring-2",
      sr: 1,
      ks: {
        o: { a: 1, k: [
          { t: 110, s: [0] },
          { t: 140, s: [60] },
          { t: 240, s: [60] },
          { t: 270, s: [0] },
        ]},
        p: { a: 0, k: [200, 150, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 1, k: [
          { t: 130, s: [40, 40, 100] },
          { t: 210, s: [100, 100, 100] },
          { t: 270, s: [40, 40, 100] },
        ]},
      },
      shapes: [
        {
          ty: "gr",
          it: [
            { ty: "el", p: { a: 0, k: [0, 0] }, s: { a: 0, k: [80, 80] } },
            { ty: "st", c: { a: 0, k: [0.83, 0.73, 0.38, 1] }, o: { a: 0, k: 100 }, w: { a: 0, k: 1 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: 100 } },
          ],
        },
      ],
      ip: 110, op: 280, st: 0, bm: 0,
    },

    // ─── INBOX (right box - primary inbox) ───
    {
      ddd: 0, ind: 7, ty: 4, nm: "inbox",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        p: { a: 0, k: [350, 150, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 1, k: [
          { t: 320, s: [100, 100, 100] },
          { t: 340, s: [115, 115, 100] },
          { t: 360, s: [100, 100, 100] },
        ]},
      },
      shapes: [
        {
          ty: "gr",
          it: [
            { ty: "rc", p: { a: 0, k: [0, 0] }, s: { a: 0, k: [60, 60] }, r: { a: 0, k: 4 } },
            { ty: "st", c: { a: 0, k: [0.94, 0.88, 0.74, 0.9] }, o: { a: 0, k: 100 }, w: { a: 0, k: 1.5 } },
            { ty: "fl", c: { a: 0, k: [0.18, 0.29, 0.37, 1] }, o: { a: 0, k: 100 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: 100 } },
          ],
        },
      ],
      ip: 0, op: 360, st: 0, bm: 0,
    },

    // ─── CHECKMARK on inbox (appears when delivered) ───
    {
      ddd: 0, ind: 8, ty: 4, nm: "check",
      sr: 1,
      ks: {
        o: { a: 1, k: [
          { t: 320, s: [0] },
          { t: 340, s: [100] },
        ]},
        p: { a: 0, k: [350, 150, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 1, k: [
          { t: 320, s: [60, 60, 100] },
          { t: 350, s: [110, 110, 100] },
          { t: 360, s: [100, 100, 100] },
        ]},
      },
      shapes: [
        {
          ty: "gr",
          it: [
            { ty: "sh", ks: { a: 0, k: { i: [[0,0],[0,0],[0,0]], o: [[0,0],[0,0],[0,0]], v: [[-10, 0], [-3, 8], [12, -8]], c: false } } },
            { ty: "st", c: { a: 0, k: [0.16, 0.53, 0.34, 1] }, o: { a: 0, k: 100 }, w: { a: 0, k: 3 }, lc: 2, lj: 2 },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: 100 } },
          ],
        },
      ],
      ip: 320, op: 360, st: 0, bm: 0,
    },

    // ─── FLOW LINE (dotted path connecting boxes) ───
    {
      ddd: 0, ind: 9, ty: 4, nm: "flow-line",
      sr: 1,
      ks: {
        o: { a: 0, k: 30 },
        p: { a: 0, k: [200, 150, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      shapes: [
        {
          ty: "gr",
          it: [
            { ty: "sh", ks: { a: 0, k: { i: [[0,0],[0,0]], o: [[0,0],[0,0]], v: [[-115, 0], [115, 0]], c: false } } },
            { ty: "st", c: { a: 0, k: [0.94, 0.88, 0.74, 1] }, o: { a: 0, k: 100 }, w: { a: 0, k: 1 }, d: [{ n: "d", nm: "dash", v: { a: 0, k: 4 } }, { n: "g", nm: "gap", v: { a: 0, k: 4 } }] },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: 100 } },
          ],
        },
      ],
      ip: 0, op: 360, st: 0, bm: 0,
    },
  ],
  markers: [],
};

export default animation;
