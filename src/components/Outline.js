import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const COLLAPSED_WIDTH = '24px';
const EXPANDED_WIDTH = '260px';
const SECTION_COUNT = 10; // Number of main sections (Heading2s)

const SECTION_IDS = [
  'scheduler-improving-content-variety-for-atmosphere-tv',
  'the-challenge',
  'discovery-phase',
  'understanding-the-feedback',
  'a-critical-turning-point',
  'beta-testing-with-real-users',
  'unexpected-insights',
  'design-iterations',
  'impact-and-results',
];

const Card = styled.nav`
  position: fixed;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  border-radius: 16px;
  min-width: ${EXPANDED_WIDTH};
  max-width: ${EXPANDED_WIDTH};
  width: ${EXPANDED_WIDTH};
  height: auto;
  z-index: 1000;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  pointer-events: auto;
  transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
  cursor: pointer;
  background: ${({ theme }) => theme.main};
  box-shadow: none;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 10px;
  
  @media (max-width: 900px) {
    display: none;
  }

  &:hover, &:focus-within {
    opacity: 1;
    background: ${({ theme }) => theme.main};
    border: 1px solid ${({ theme }) => theme.outline};
  }
`;

const CollapsedLines = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: absolute;
  right: -100px;
  top: 0;
  pointer-events: none;
  transition: opacity 0.2s;
  z-index: 2;
  ${Card}:hover &,
  ${Card}:focus-within & {
    opacity: 0;
    pointer-events: none;
  }
`;

const CollapsedLine = styled.div`
  width: 16px;
  height: 2.5px;
  border-radius: 2px;
  margin: 7px 0;
  opacity: 0.85;
  background: ${({ active, theme }) => (active ? theme.textMain : theme.textLight)};
  transition: background 0.2s, box-shadow 0.2s;
  box-shadow: ${({ active }) => (active ? '0 0 2px #111' : 'none')};
`;

const OutlineList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 20px;
  color: ${({ theme }) => theme.textMain};
  opacity: 0;
  pointer-events: none;
  min-width: 180px;
  max-width: 100%;
  height: 100%;
  overflow-y: auto;

  ${Card}:hover &,
  ${Card}:focus-within & {
    opacity: 1;
    pointer-events: auto;
  }
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #ddd;
    border-radius: 2px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #ccc;
  }
`;


const OutlineSection = styled.li`
  width: 100%;
`;

const OutlineSectionWithChildren = styled(OutlineSection)`
  margin-bottom: 0;
`;

const OutlineSubsection = styled.ul`
  list-style: none;
  margin: 0 0 0 18px;
  padding: 0;
  font-weight: 400;
  color: ${({ theme }) => theme.textMain};
`;

const OutlineSubitem = styled.li`
  margin-bottom: 6px;
  font-size: 1.01rem;
  color: ${({ theme }) => theme.textLight};
  font-weight: 400;
`;

const CardButton = styled.div`
  all: unset;
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background: none; 
  border: none;
  outline: none;
  padding: 0;
`;

const OutlineLink = styled.a`
  color: inherit;
  text-decoration: none;
  background-color: ${({ active }) => active ? 'rgba(0, 0, 0, 0.05)' : 'transparent'};
  border-radius: 4px;
  width: 100%;
  padding: 2px 8px;
  &:hover {
    background-color: ${({ theme }) => theme.outline};
  }
  cursor: pointer;
  display: block;
  font-size: 14px;
  font-weight: 400;
  transition: background-color 0.2s ease;
`;

function getActiveSection() {
  if (typeof window === 'undefined') return 0;
  const offsets = SECTION_IDS.map(id => {
    const el = document.getElementById(id);
    if (!el) return Infinity;
    const rect = el.getBoundingClientRect();
    return Math.abs(rect.top - 120); // 120px offset for nav, tweak as needed
  });
  return offsets.indexOf(Math.min(...offsets));
}

const Outline = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setActiveIdx(getActiveSection());
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Card tabIndex={0} aria-label="Page outline">
      <CollapsedLines>
        {SECTION_IDS.map((_, i) => (
          <CollapsedLine key={i} active={i === activeIdx} />
        ))}
      </CollapsedLines>
      <CardButton tabIndex={-1} aria-hidden="true">
        <OutlineList>
          <OutlineSection>
            <OutlineLink href="#scheduler-improving-content-variety-for-atmosphere-tv" active={activeIdx === 0}>Summary</OutlineLink>
          </OutlineSection>
          <OutlineSection>
            <OutlineLink href="#the-challenge" active={activeIdx === 1}>The Challenge</OutlineLink>
          </OutlineSection>
          <OutlineSectionWithChildren> 
            <OutlineLink href="#discovery-phase" active={activeIdx === 2}>Discovery Phase</OutlineLink>
            <OutlineSubsection>
              <OutlineSubitem><OutlineLink href="#uncovering-the-real-problems">Uncovering the Real Problems</OutlineLink></OutlineSubitem>
              <OutlineSubitem><OutlineLink href="#key-insights">Key Insights</OutlineLink></OutlineSubitem>
            </OutlineSubsection>
          </OutlineSectionWithChildren>
          <OutlineSectionWithChildren>
            <OutlineLink href="#understanding-the-feedback" active={activeIdx === 3}>Understanding the feedback</OutlineLink>
            <OutlineSubsection>
              <OutlineSubitem><OutlineLink href="#the-hypothesis">The Hypothesis</OutlineLink></OutlineSubitem>
              <OutlineSubitem><OutlineLink href="#prototyping-process">Prototyping Process</OutlineLink></OutlineSubitem>
            </OutlineSubsection>
          </OutlineSectionWithChildren>
          <OutlineSection>
            <OutlineLink href="#a-critical-turning-point" active={activeIdx === 4}>A Critical Turning Point</OutlineLink>
          </OutlineSection>
          <OutlineSectionWithChildren>
            <OutlineLink href="#beta-testing-with-real-users" active={activeIdx === 5}>Beta Testing with Real Users</OutlineLink>
          </OutlineSectionWithChildren>
          <OutlineSection>
            <OutlineLink href="#unexpected-insights" active={activeIdx === 6}>Unexpected Insights</OutlineLink>
          </OutlineSection>
          <OutlineSectionWithChildren>
            <OutlineLink href="#design-iterations" active={activeIdx === 7}>Design Iterations</OutlineLink>
            <OutlineSubsection>
              <OutlineSubitem><OutlineLink href="#enterprise-management">Enterprise Management</OutlineLink></OutlineSubitem>
              <OutlineSubitem><OutlineLink href="#scheduling-enhancements">Scheduling Enhancements</OutlineLink></OutlineSubitem>
              <OutlineSubitem><OutlineLink href="#automation-and-control">Automation and Control</OutlineLink></OutlineSubitem>
            </OutlineSubsection>
          </OutlineSectionWithChildren>
          <OutlineSection>
            <OutlineLink href="#impact-and-results" active={activeIdx === 8}>Impact and Results</OutlineLink>
          </OutlineSection>
          <OutlineSection>
            <OutlineLink href="#reflections" active={activeIdx === 9}>Reflections</OutlineLink>
          </OutlineSection>
        </OutlineList>
      </CardButton>
    </Card>
  );
};

export default Outline; 