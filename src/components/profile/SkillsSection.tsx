import { Card, Divider, Space, Tag, Typography } from "antd"
import { useTranslation } from "react-i18next"
import type { SkillGroup } from "@/model/profile"

interface SkillsSectionProps {
    items: SkillGroup[]
}

function SkillsSection({ items }: SkillsSectionProps) {
    const { t } = useTranslation()
    
    return (
        <section className="section">
            <Space direction="vertical" size={16} className="section__header">
                <Typography.Title level={3} className="section__title">
                    {t('sections.skills.title')}
                </Typography.Title>
                <Typography.Text type="secondary">{t('sections.skills.subtitle')}</Typography.Text>
            </Space>

            <Card className="section-card" bordered={false}>
                <Space direction="vertical" size={12} style={{ width: "100%" }}>
                    {items.map((group, index) => (
                        <div key={group.label} className="skills-row">
                            <Typography.Text strong>{group.label}</Typography.Text>
                            <Space wrap size={[8, 8]}>
                                {group.items.map((skill) => (
                                    <Tag key={skill} color="blue">
                                        {skill}
                                    </Tag>
                                ))}
                            </Space>
                            {index < items.length - 1 && <Divider className="skills-row__divider" />}
                        </div>
                    ))}
                </Space>
            </Card>
        </section>
    )
}

export default SkillsSection
