import React from 'react';
import { PATHWAY_MODULES } from '../data/pathways';

export function SceneFallback({
  modules = PATHWAY_MODULES,
  selectedId,
  activeId,
  onSelect,
  onNavigate,
  className = '',
}) {
  const currentId = selectedId || activeId || 'workshops';

  const nodeCoords = {
    workshops: { x: 165, y: 120 },
    crt: { x: 435, y: 120 },
    internships: { x: 165, y: 270 },
    projects: { x: 435, y: 270 },
  };
  const center = { x: 300, y: 195 };

  return (
    <div
      className={`relative w-full h-full min-h-[300px] flex items-center justify-center select-none ${className}`}
      aria-label="Interactive Isometric Architecture Map of THAKSA.AI Learning Pathways"
    >
      <svg
        viewBox="0 0 600 390"
        className="w-full h-full max-w-[560px] overflow-visible"
        role="img"
        aria-label="Four connected capability modules: Workshops, CRT, Internships, and Final-Year Projects"
      >
        <defs>
          <linearGradient id="baseSlabGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1A2335" />
            <stop offset="100%" stopColor="#0E1525" />
          </linearGradient>
          <linearGradient id="coreGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C7F36B" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#3659D9" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* Isometric Machined Base Plate */}
        <polygon
          points="300,32 548,195 300,358 52,195"
          fill="url(#baseSlabGrad)"
          stroke="#2E3C56"
          strokeWidth="1.5"
        />
        <polygon
          points="300,48 525,195 300,342 75,195"
          fill="none"
          stroke="#25324B"
          strokeWidth="1"
          strokeDasharray="4 4"
        />

        {/* Hairline Circuit Traces from Central Core to the 4 Pathway Modules */}
        {modules.map((mod) => {
          const pt = nodeCoords[mod.id] || { x: 300, y: 195 };
          const isActive = currentId === mod.id;
          return (
            <g key={`trace-${mod.id}`}>
              <line
                x1={center.x}
                y1={center.y}
                x2={pt.x}
                y2={pt.y}
                stroke={isActive ? '#C7F36B' : '#33425E'}
                strokeWidth={isActive ? '2.5' : '1.5'}
                strokeDasharray={isActive ? 'none' : '5 4'}
              />
              <circle
                cx={(center.x + pt.x) / 2}
                cy={(center.y + pt.y) / 2}
                r={isActive ? 4 : 2.5}
                fill={isActive ? '#C7F36B' : '#3659D9'}
              />
            </g>
          );
        })}

        {/* Central Capability Reactor Core */}
        <g transform={`translate(${center.x}, ${center.y})`}>
          <polygon
            points="0,-34 38,-14 38,18 0,38 -38,18 -38,-14"
            fill="#152036"
            stroke="#C7F36B"
            strokeWidth="1.75"
          />
          <polygon
            points="0,-20 22,-8 22,10 0,22 -22,10 -22,-8"
            fill="url(#coreGlow)"
            opacity="0.88"
          />
          <text
            x="0"
            y="4"
            textAnchor="middle"
            fill="#101828"
            fontSize="9"
            fontFamily="JetBrains Mono, monospace"
            fontWeight="700"
          >
            CORE
          </text>
        </g>

        {/* 4 Interactive Isometric Pathway Blocks */}
        {modules.map((mod) => {
          const pt = nodeCoords[mod.id] || { x: 300, y: 195 };
          const isActive = currentId === mod.id;
          const liftY = isActive ? -10 : 0;

          return (
            <g
              key={mod.id}
              transform={`translate(${pt.x}, ${pt.y + liftY})`}
              onClick={() => {
                if (onSelect) onSelect(mod.id);
                if (onNavigate) onNavigate(mod.href || mod.path);
              }}
              onMouseEnter={() => onSelect && onSelect(mod.id)}
              style={{ cursor: 'pointer', transition: 'transform 220ms ease' }}
            >
              <polygon
                points="0,-24 58,4 0,32 -58,4"
                transform={`translate(0, ${18 - liftY})`}
                fill="#0A101D"
                stroke={isActive ? '#C7F36B' : '#243048'}
                strokeWidth="1"
              />
              <polygon
                points="-54,-8 0,18 0,44 -54,18"
                fill={isActive ? '#2A3C5F' : '#1B263B'}
                stroke={isActive ? '#C7F36B' : '#384866'}
                strokeWidth="1.2"
              />
              <polygon
                points="54,-8 0,18 0,44 54,18"
                fill={isActive ? '#1F2E4B' : '#151E30'}
                stroke={isActive ? '#C7F36B' : '#384866'}
                strokeWidth="1.2"
              />
              <polygon
                points="0,-34 54,-8 0,18 -54,-8"
                fill={isActive ? '#F7F8F4' : '#23314C'}
                stroke={isActive ? '#C7F36B' : '#4A5C7E'}
                strokeWidth={isActive ? '2' : '1.2'}
              />
              <text
                x="0"
                y="-11"
                textAnchor="middle"
                fill={isActive ? '#3659D9' : '#C7F36B'}
                fontSize="8.5"
                fontFamily="JetBrains Mono, monospace"
                fontWeight="700"
              >
                {mod.code}
              </text>
              <text
                x="0"
                y="3"
                textAnchor="middle"
                fill={isActive ? '#101828' : '#F7F8F4'}
                fontSize="11"
                fontFamily="Plus Jakarta Sans, sans-serif"
                fontWeight="700"
              >
                {mod.shortTitle || mod.shortLabel}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default SceneFallback;
