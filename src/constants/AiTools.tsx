import ClaudeIcon from '@/components/icons/ClaudeIcon';
import CodexIcon from '@/components/icons/CodexIcon';
import GeminiIcon from '@/components/icons/GeminiIcon';

type aiToolsProps = {
  [key: string]: JSX.Element;
};

const ICON_SIZE: number = 24;

export const AI_TOOLS: aiToolsProps = {
  Claude: <ClaudeIcon size={ICON_SIZE} color="#D97757" />,
  Codex: <CodexIcon size={ICON_SIZE} color="#75A99C" />,
  Gemini: <GeminiIcon size={ICON_SIZE} />,
};
