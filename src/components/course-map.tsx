'use client';

import { useEffect, useRef, useState } from 'react';

import cytoscape from 'cytoscape';

import dagre from 'cytoscape-dagre';
import { DagreLayoutOptions } from 'cytoscape-dagre';
cytoscape.use(dagre);

import { cytoStyles } from '@/styles/cytoscape-styles';

import CourseModal from './course-modal';

type Props = {
  specName: string;
};

export interface Course {
  id: string;
  name: string;
  prereqs: string[][];
  spec: Record<string, string>;
  description: string;
  prereqsText: string;
  restrictsText: string;
  link: string;
}

export default function Tree({ specName }: Props) {
  const cyContainer = useRef<HTMLDivElement | null>(null);
  const cyInstance = useRef<cytoscape.Core | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [courseDetails, setCourseDetails] = useState<
    null | (Course & { type: string })
  >(null);

  useEffect(() => {
    fetch('/api/courses')
      .then((res) => res.json())
      .then((allCourses: Course[]) => {
        const visibleCourses = allCourses.filter(
          (c) => c.spec[specName] || c.spec['PartI']
        );

        const nodes = visibleCourses.map((course) => ({
          data: {
            id: course.id,
            name: course.name,
            type: course.spec[specName] || course.spec['PartI'],
            description: course.description,
            prereqsText: course.prereqsText,
            restrictsText: course.restrictsText,
            link: course.link,
          },
        }));

        const visibleCodes = visibleCourses.map((c) => c.id);
        const edges: { data: { source: string; target: string } }[] = [];
        visibleCourses.forEach((course) => {
          course.prereqs.forEach((group) =>
            group.forEach((prereqCode) => {
              if (visibleCodes.includes(prereqCode)) {
                edges.push({ data: { source: prereqCode, target: course.id } });
              }
            })
          );
        });

        if (cyInstance.current) {
          cyInstance.current.destroy();
        }

        const cy = cytoscape({
          container: cyContainer.current,
          elements: { nodes, edges },
          style: cytoStyles,
          //layout: { name: 'breadthfirst', directed: true, padding: 10 },
          layout: {
            name: 'dagre',
            rankDir: 'TB',
            fit: true,
            ranker: 'network-simplex',
          } as DagreLayoutOptions,

          minZoom: 0.3,
          maxZoom: 2,
          autoungrabify: false,
        });
        cyInstance.current = cy;

        cy.on('tap', 'node', function (event) {
          setCourseDetails(event.target.data());
          setModalOpen(true);
        });
      });

    const handleResize = () => {
      if (cyInstance.current) {
        cyInstance.current.resize();
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (cyInstance.current) cyInstance.current.destroy();
    };
  }, []);

  return (
    <div>
      <div
        ref={cyContainer}
        className="h-[700px] w-full rounded-md border-2 border-gray-300 bg-gray-100"
      />
      <CourseModal
        modalOpen={modalOpen}
        courseDetails={courseDetails}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
