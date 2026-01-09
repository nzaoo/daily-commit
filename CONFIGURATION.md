# Configuration for Daily Commit Generator

## Workflow Schedule

Set the cron expression to control when commits are generated.

### Common Cron Patterns

```
0 2 * * *       - Every day at 2:00 AM (default)
0 9 * * *       - Every day at 9:00 AM
0 0 * * *       - Every day at midnight
0 12 * * *      - Every day at noon
0 6,12,18 * * * - Three times daily (6 AM, noon, 6 PM)
```

## Pattern Configuration

Edit `BASE_PATTERN` in `.github/workflows/main.yml` to customize the contribution graph pattern.

Each row represents a day of the week (Sunday to Saturday).
Each number represents a column in the contribution graph.

- `1` = High activity (6 commits)
- `0` = Low activity (1 commit)

## Variables

- `COMMITS`: Number of commits to generate (set dynamically based on pattern)
- `PATTERN_VALUE`: Current day's pattern value (0 or 1)
- `COL`: Current week column
- `DOW`: Day of week (0=Sunday, 6=Saturday)

## Git Configuration

The workflow uses your GitHub account for commits:
- `git config user.name`: Your GitHub username
- `git config user.email`: Your noreply email

This ensures commits appear under your profile and count toward your contribution graph.
