export const commandsCheatsheetStyles = `
/* Slash Commands Quick Reference Styles */
.command-groups {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.command-group {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 0.75rem;
  min-width: 220px;
}

.command-group h5 {
  margin: 0 0 0.75rem 0;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.command-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.command-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.4rem 0.6rem;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  transition: all 0.2s ease;
  min-height: 2.2rem;
  gap: 0.5rem;
}

.command-item:hover {
  background: var(--bg-hover);
  border-color: var(--color-accent);
}

.command-item code {
  background: none;
  color: var(--color-accent);
  font-weight: 600;
  font-size: 0.85rem;
  padding: 0;
  border-radius: 0;
  white-space: nowrap;
  flex-shrink: 0;
}

.command-item span {
  color: var(--text-secondary);
  font-size: 0.8rem;
  text-align: right;
  flex: 1;
  margin-left: 0.75rem;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Responsive Design for Command Groups */
@media (max-width: 767px) {
  .command-groups {
    grid-template-columns: repeat(1, 1fr);
    gap: 0.75rem;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .command-groups {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }
}

@media (min-width: 1024px) and (max-width: 1399px) {
  .command-groups {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
}

@media (min-width: 1600px) {
  .command-groups {
    grid-template-columns: repeat(6, 1fr);
    gap: 1rem;
  }
}

@media (max-width: 767px) {
  .command-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
  
  .command-item span {
    text-align: left;
    margin-left: 0;
  }
}
`;
