/// <reference path="../../types/env.d.ts" />

export interface ColorScheme {
  background: string;
  border: string;
  text: string;
}

export interface GradientConfig {
  type: 'linear' | 'radial';
  colors: string[];
  stops?: number[];
}

export class StyleManager {
  // Difficulty color mapping
  public getDifficultyColor(difficulty: string): string {
    switch (difficulty) {
      case 'beginner': return '#10b981'; // emerald-500
      case 'intermediate': return '#f59e0b'; // amber-500
      case 'expert': return '#a855f7'; // purple-500
      default: return '#6b7280'; // gray-500
    }
  }

  // Tip type color schemes
  public getTipColors(tipType: string): ColorScheme {
    switch (tipType) {
      case 'success':
        return { 
          background: 'rgba(16, 185, 129, 0.08)', 
          border: '#10b981',
          text: '#065f46'
        };
      case 'info':
        return { 
          background: 'rgba(59, 130, 246, 0.08)', 
          border: '#3b82f6',
          text: '#1e40af'
        };
      case 'warning':
        return { 
          background: 'rgba(245, 158, 11, 0.08)', 
          border: '#f59e0b',
          text: '#92400e'
        };
      case 'expert':
        return { 
          background: 'rgba(168, 85, 247, 0.08)', 
          border: '#a855f7',
          text: '#6b21a8'
        };
      case 'tip':
      default:
        return { 
          background: 'rgba(6, 182, 212, 0.08)', 
          border: '#06b6d4',
          text: '#0e7490'
        };
    }
  }

  // Enhanced gradient configurations
  public getBackgroundGradient(): GradientConfig {
    return {
      type: 'linear',
      colors: ['#ffffff', '#fafbfc', '#f8fafc'],
      stops: [0, 0.6, 1]
    };
  }

  public getHeaderGradient(): GradientConfig {
    return {
      type: 'linear',
      colors: ['#f0f9ff', '#e0f2fe', '#f1f5f9'],
      stops: [0, 0.5, 1]
    };
  }

  public getIconGradient(): GradientConfig {
    return {
      type: 'radial',
      colors: ['#ffffff', '#e0f2fe', '#bae6fd'],
      stops: [0, 0.7, 1]
    };
  }

  // Brand colors and styling
  public getBrandColors() {
    return {
      primary: '#0ea5e9', // sky-500
      primaryLight: '#38bdf8', // sky-400
      accent: '#0284c7', // sky-600
      background: 'rgba(14, 165, 233, 0.08)',
      text: '#0ea5e9'
    };
  }

  // Typography scale
  public getFontSizes() {
    return {
      title: 48,
      subtitle: 32,
      body: 28,
      caption: 24,
      small: 20
    };
  }

  // Spacing scale
  public getSpacing() {
    return {
      xs: 8,
      sm: 12,
      md: 16,
      lg: 24,
      xl: 32,
      xxl: 48
    };
  }

  // Border radius scale
  public getBorderRadius() {
    return {
      sm: 8,
      md: 12,
      lg: 16,
      xl: 20,
      xxl: 24
    };
  }

  // Shadow configurations
  public getShadowConfig() {
    return {
      subtle: 'rgba(0, 0, 0, 0.05)',
      medium: 'rgba(0, 0, 0, 0.1)',
      strong: 'rgba(0, 0, 0, 0.15)'
    };
  }

  // Helper method to get tip type by index for cycling
  public getTipTypeByIndex(index: number): string {
    const types = ['success', 'info', 'warning', 'tip', 'expert'];
    return types[index % types.length];
  }

  // Difficulty text mapping
  public mapDifficulty(difficulty: string): string {
    switch (difficulty) {
      case 'beginner': return '入门';
      case 'intermediate': return '进阶';
      case 'expert': return '专家';
      default: return difficulty;
    }
  }
}
