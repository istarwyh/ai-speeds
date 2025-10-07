export const trendsArticleStyles = `
/* Trends Article Styles */
.trends-article {
  max-width: 800px;
  margin: 0 auto;
  padding: var(--space-fluid-lg);
  line-height: var(--line-height-relaxed);
  color: var(--color-text-primary);
  background: var(--color-bg-primary);
  font-family: var(--font-family-primary);
}

/* Article Header */
.article-header {
  margin-bottom: var(--space-12);
  padding-bottom: var(--space-8);
  border-bottom: 2px solid var(--color-border-light);
}

.article-meta {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  margin-bottom: var(--space-4);
  font-size: var(--font-size-sm);
}

.article-category {
  background: var(--color-accent);
  color: var(--color-text-inverse);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-lg);
  font-weight: 500;
}

.article-date {
  color: var(--color-text-muted);
}

.article-title {
  font-size: var(--font-size-3xl);
  font-weight: 700;
  line-height: var(--line-height-tight);
  margin: var(--space-4) 0 var(--space-2) 0;
  color: var(--color-text-primary);
}

.article-subtitle {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  font-style: italic;
  margin: 0;
}

/* Article Content */
.article-content {
  font-size: var(--font-size-base);
}

.lead-paragraph {
  font-size: var(--font-size-lg);
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: var(--space-6);
}

.article-content p {
  margin-bottom: var(--space-4);
  text-align: justify;
}

.article-content p:last-child {
  margin-bottom: 0;
}

/* Article Sections */
.article-section {
  margin: var(--space-12) 0;
  padding: var(--space-8) 0;
  border-top: 1px solid var(--color-border-light);
}

.article-section:first-of-type {
  border-top: none;
  margin-top: var(--space-8);
}

.article-section h2 {
  font-size: var(--font-size-2xl);
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: var(--space-4);
  position: relative;
}

.article-section h2::before {
  content: '';
  position: absolute;
  left: -var(--space-4);
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 24px;
  background: var(--color-accent);
  border-radius: var(--radius-sm);
}

/* Images and Figures */
.article-image {
  margin: var(--space-8) 0;
  text-align: center;
}

.responsive-image {
  max-width: 100%;
  height: auto;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  margin-bottom: var(--space-3);
  transition: transform var(--transition-normal);
}

.responsive-image:hover {
  transform: scale(1.02);
}

.article-image figcaption {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  font-style: italic;
  text-align: center;
  margin-top: var(--space-2);
}

/* References */
.article-references {
  background: var(--color-bg-secondary);
  padding: var(--space-6);
  border-radius: var(--radius-lg);
  margin-top: var(--space-12);
  border-left: 4px solid var(--color-accent);
}

.article-references h3 {
  font-size: var(--font-size-lg);
  font-weight: 600;
  margin-bottom: var(--space-3);
  color: var(--color-text-primary);
}

.article-references ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.article-references li {
  margin-bottom: var(--space-2);
}

.article-references a {
  color: var(--color-primary);
  text-decoration: none;
  font-size: var(--font-size-sm);
  transition: color var(--transition-fast);
}

.article-references a:hover {
  color: var(--color-primary-dark);
  text-decoration: underline;
}

/* Strong and emphasis */
.article-content strong {
  font-weight: 600;
  color: var(--color-text-primary);
}

.article-content em {
  font-style: italic;
  color: var(--color-text-secondary);
}

/* Responsive Design */
@media (max-width: 768px) {
  .trends-article {
    padding: var(--space-fluid-md);
  }

  .article-title {
    font-size: var(--font-size-2xl);
  }

  .article-section h2 {
    font-size: var(--font-size-xl);
  }

  .article-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-2);
  }
}

@media (max-width: 480px) {
  .trends-article {
    padding: var(--space-fluid-sm);
  }

  .article-title {
    font-size: var(--font-size-xl);
    line-height: 1.3;
  }

  .lead-paragraph {
    font-size: var(--font-size-base);
  }
}

/* Print styles */
@media print {
  .trends-article {
    max-width: none;
    padding: 0;
    background: white;
  }

  .article-image {
    break-inside: avoid;
  }

  .article-section {
    page-break-inside: avoid;
  }
}
`;
